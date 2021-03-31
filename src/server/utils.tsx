import { Request, Response } from "express";
import { renderToNodeStream } from "react-dom/server";
import { StaticRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { ServerStore } from "@/store";
import { NewRouteConfig } from "@/routes";

const render = (
  store: ServerStore,
  routes: NewRouteConfig[],
  req: Request,
  res: Response
) => {
  const content = renderToNodeStream(
    <div id="root">
      <Provider store={store}>
        <Router context={{}} location={req.path}>
          <Switch>{renderRoutes(routes)}</Switch>
        </Router>
      </Provider>
    </div>
  );
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.write(`
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
  `);
  content.pipe(res, { end: false });
  content.on("end", () => {
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
