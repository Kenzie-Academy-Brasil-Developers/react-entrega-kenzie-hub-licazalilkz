import { createContext, useState } from "react";
import { api } from "../../api/axios";
import { useNavigate } from "react-router-dom";


export const modalContext = createContext({});

export const ModalProvider = ({children}) =>{
    const token = JSON.parse(localStorage.getItem("@tokenKenzieHub"));
    const [techId, setTechId] = useState(null);
    const navigate = useNavigate();

    function getTechId(id){
        setTechId(id);
        console.log(techId);
    }

    const createTech = async(formData) => {
        const {data} = await api.post("/users/techs", formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        setTechId(null);
        navigate("/");
    };
    const updateTech = async(formData) => {
        const {data} = await api.put(`/users/techs/${techId}`, formData,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        setTechId(null);
        navigate("/");
    };
    const deleteTech = async() => {
        const {data} = await api.delete(`/users/techs/${techId}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        setTechId(null);
        navigate("/");
    };

    return(
        <>
            <modalContext.Provider value={{createTech, updateTech, deleteTech, getTechId}}>
                {children}
            </modalContext.Provider>
        </>
    )
}