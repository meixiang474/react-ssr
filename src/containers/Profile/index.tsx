import { useAuth } from "@/hooks";
import { Redirect } from "react-router";

const Profile = () => {
  const { auth, from } = useAuth();
  return auth ? (
    <div>我是用户信息</div>
  ) : (
    <Redirect to={{ pathname: "/login", state: { from } }} />
  );
};

export default Profile;
