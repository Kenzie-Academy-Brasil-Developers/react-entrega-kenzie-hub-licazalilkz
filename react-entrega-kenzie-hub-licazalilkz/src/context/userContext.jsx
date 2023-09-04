import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import { api } from "../../api/axios";



export const UserContext = createContext({});

export const UserProvide = ({children}) => {
    const tokenStorage = localStorage.getItem("@tokenKenzieHub");

    const [userToken, setUserToken] = useState( tokenStorage ?JSON.parse(tokenStorage) : null);
    const navigate = useNavigate();

    const login = async(formData) => {
        try{
            const token = await api.post("/sessions", formData);
            localStorage.setItem("@tokenKenzieHub", JSON.stringify(token.data.token));
            setUserToken(token.data.token);
            toast.success("Bem vindo de volta !");
            navigate("/dashboard");
        }catch(error){
            toast.error("Ops, algo deu errado !");
            console.log(error);
        }
    }

    const register = async(formData) =>{
        try{
            await api.post("/users", formData);
            toast.success("Bem vindo, conta criada com sucesso !");
            navigate("/");
        }catch(error){
            console.log(error);
            toast.error("Ops, algo deu errado ! :(");
        }
    }

    return (
        <>
            <UserContext.Provider value={{login, register, userToken, setUserToken}}>{children}</UserContext.Provider>
        </>
    )
}