import { Request, Response } from "express";
import { renderToNodeStream } from "react-dom/server";
import { StaticRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { ServerStore } from "@/store";
import { NewRouteConfig } from "@/routes";
import fs from "fs";
import path from "path";

const whiteList = ["/login", "/", "/profile"];

const render = async (
  store: ServerStore,
  routes: NewRouteConfig[],
  context: Record<string, any>,
  req: Request,
  res: Response
) => {
  const stream = renderToNodeStream(
    <div id="root">
      <Provider store={store}>
        <Router context={context} location={req.path}>
          <Switch>{renderRoutes(routes)}</Switch>
        </Router>
      </Provider>
    </div>
  );
  const styles = await fs.promises.readFile(
    path.join(__dirname, "index.css"),
    "utf-8"
  );
  if (!whiteList.includes(req.path)) {
    res.status(404);
  }
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.write(`
    <html>
      <head>
        <title>ssr</title>
        <style>
          ${styles}
        </style>
      </head>
      <body>
  `);
  stream.pipe(res, { end: false });
  stream.on("end", () => {
    res.write(`
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src="/index.js"></script>
        </body>
      </html>
    `);
    res.end();
  });
};

export default render;
