import { Route, Routes, useNavigate } from "react-router-dom";
import { Register } from "../pages/register/register";
import { Login } from "../pages/login/login";
import { Dashboard } from "../pages/dashboard/dashboard";
import { useEffect } from "react";

export function RouterMain(){
    const navigate = useNavigate();

    
    useEffect(()=>{
        const getAccessToken = localStorage.getItem("@tokenKenzieHub")
        if(!getAccessToken){
            navigate("/");
        }
    }, [])

    return(
        <Routes>
            <Route path="/" element={ <Login/> } />
            <Route path="/register" element={<Register />}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    );
}