import { Outlet } from "react-router";
import LoginForm from "./LoginForm/LoginForm";


const useAuth = () => {
  const user = { loggedIn: false};
  return user && user.loggedIn;
}


const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <LoginForm />
}

export default ProtectedRoutes
