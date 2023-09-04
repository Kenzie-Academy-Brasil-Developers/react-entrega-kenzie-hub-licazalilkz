import { createContext, useState } from "react";
import { api } from "../../api/axios";


export const modalContext = createContext({});

export const ModalProvider = ({children}) =>{
    const token = JSON.parse(localStorage.getItem("@tokenKenzieHub"));
    const [techId, setTechId] = useState(null);

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
        window.location.reload();
    };
    const updateTech = async(formData) => {
        const {data} = await api.put(`/users/techs/${techId}`, formData,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        setTechId(null);
        window.location.reload();
    };
    const deleteTech = async() => {
        const {data} = await api.delete(`/users/techs/${techId}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        setTechId(null);
        window.location.reload();
    };

    return(
        <>
            <modalContext.Provider value={{createTech, updateTech, deleteTech, getTechId}}>
                {children}
            </modalContext.Provider>
        </>
    )
}