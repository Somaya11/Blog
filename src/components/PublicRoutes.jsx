import HomePage from "./pages/HomePage/HomePage";

import { Navigate, Outlet } from "react-router-dom";

const useAuth= () => {
  const user=localStorage.getItem('user')
  if (user) {
    return true

  }else {
    return false
  }
}

const PublicRoutes= () => {
  const isAuth=useAuth()
  return isAuth ? <Navigage to="/homepage"/>: <Outlet/>
}

export default PublicRoutes;