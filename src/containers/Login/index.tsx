import { NewDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import * as actions from "@/store/actions/user";

const Login = () => {
  const history = useHistory();
  const location = useLocation<{ from?: string }>();
  const dispatch = useDispatch<NewDispatch>();

  const handleClick = async () => {
    await dispatch(actions.login());
    history.push(location.state?.from || "/");
  };
  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
