import express from "express";
import proxy from "express-http-proxy";
import path from "path";
import { matchRoutes } from "react-router-config";
import routes from "../routes";
import render from "./utils";
import { getServerStore } from "@/store";
import { HOST } from "@/api";

const app = express();

app.use(
  "/ssr/api",
  proxy(HOST, {
    proxyReqPathResolver: (req) => {
      return "/ssr/api" + req.url;
    },
  })
);

if (SSR) {
  app.use(express.static(path.join(__dirname, "..", "public")));
  app.use(express.static(path.join(__dirname, "..", "assets")));

  app.get("*", async (req, res) => {
    const store = getServerStore(req);

    const matchedRoutes = matchRoutes(routes, req.path);

    const promises: Promise<void>[] = [];

    matchedRoutes.forEach((item) => {
      if (item.route.loadData) {
        promises.push(item.route.loadData(store));
      }
    });

    await Promise.all(promises);
    render(store, routes, req, res);
  });
}

app.listen(3000, () => {
  console.log("Server is Running on 3000");
});
