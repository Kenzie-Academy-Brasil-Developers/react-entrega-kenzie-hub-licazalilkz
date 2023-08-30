import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/userContext";


export const LoggedRoutes = () => {
    const {userToken} = useContext(UserContext);
    return userToken ? <Navigate to="/dashboard"/> : <Outlet/>;
}