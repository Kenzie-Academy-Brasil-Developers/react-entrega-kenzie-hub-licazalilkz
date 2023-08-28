import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../context/userContext"

export const PrivateRoutes = () => {
    const {userToken} = useContext(UserContext);
    console.log(userToken);

    return !!userToken ? <Outlet /> : <Navigate to ="/"/>;
}