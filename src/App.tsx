import routes from "./routes";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { getClientStore } from "@/store";

const store = getClientStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>{renderRoutes(routes)}</Switch>
      </Router>
    </Provider>
  );
};

export default App;
