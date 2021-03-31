import { memo } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  login: boolean;
  handleLogout: () => void;
  translate: () => void;
}

export const Header = memo((props: HeaderProps) => {
  const { login, handleLogout, translate } = props;

  return (
    <>
      <Link to="/">首页</Link>
      {login ? (
        <>
          <button onClick={translate}>翻译</button>
          <Link to="/profile">个人信息</Link>
          <button onClick={handleLogout}>退出</button>
        </>
      ) : (
        <Link to="/login">登录</Link>
      )}
    </>
  );
});
