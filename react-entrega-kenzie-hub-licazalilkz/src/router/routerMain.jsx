import { Route, Routes } from "react-router-dom";
import { Register } from "../pages/register/register";
import { Login } from "../pages/login/login";
import { Dashboard } from "../pages/dashboard/dashboard";
import { PrivateRoutes } from "./privateRoutes/privateRoutes";
import { LoggedRoutes } from "./loggedRoutes/loggedRoutes";

export function RouterMain(){
  
    return(
        <Routes>
            <Route path="/" element={<LoggedRoutes/>}>
                <Route index element={ <Login/> } />
                <Route path="/register" element={<Register />}/>
            </Route>
            <Route path="/dashboard" element ={<PrivateRoutes/>}>
                <Route index element={<Dashboard/>}/>
            </Route>
        </Routes>
    );
}