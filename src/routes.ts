import { RouteConfig } from "react-router-config";
import { ServerStore } from "./store";
import App from "./containers/App";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import NotFound from "./containers/NotFound";

export interface NewRouteConfig extends RouteConfig {
  loadData?: (store: ServerStore) => Promise<void>;
}

const routes: NewRouteConfig[] = [
  {
    key: "app",
    path: "/",
    component: App,
    loadData: App.loadData,
    routes: [
      {
        key: "home",
        path: "/",
        component: Home,
        exact: true,
        loadData: Home.loadData,
      },
      {
        key: "login",
        path: "/login",
        component: Login,
      },
      {
        key: "profile",
        path: "/profile",
        component: Profile,
      },
      {
        key: "notFound",
        component: NotFound,
      },
    ],
  },
];

export default routes;
