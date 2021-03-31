import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const useAuth = () => {
  const { pathname } = useLocation();
  const { login } = useSelector<RootState, RootState["user"]>(
    (state) => state.user
  );
  return { auth: login, from: pathname };
};
