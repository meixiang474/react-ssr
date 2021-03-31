import { useDispatch, useSelector } from "react-redux";
import { NewDispatch, RootState, ServerStore } from "@/store";
import { Header } from "@/components";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { NewRouteConfig } from "../routes";
import * as userActions from "@/store/actions/user";
import * as homeActions from "@/store/actions/home";
import { useCallback, useEffect } from "react";

const App = (props: RouteConfigComponentProps) => {
  const { login } = useSelector<RootState, RootState["user"]>(
    (state) => state.user
  );
  const dispatch = useDispatch<NewDispatch>();

  useEffect(() => {
    if (!SSR) {
      dispatch(userActions.validate());
    }
  });

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const translate = useCallback(() => {
    dispatch(homeActions.translate());
  }, [dispatch]);

  const { routes } = props.route as NewRouteConfig;
  return (
    <div>
      <Header login={login} handleLogout={handleLogout} translate={translate} />
      {renderRoutes(routes)}
    </div>
  );
};

App.loadData = (store: ServerStore) => {
  return store.dispatch(userActions.validate());
};

export default App;
