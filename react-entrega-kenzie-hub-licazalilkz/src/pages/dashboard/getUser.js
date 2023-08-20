import { useEffect } from "react";
import { api } from "../../../api/axios";


export const userProfile = async([setUserInfo]) => {
    useEffect(() =>{
        const token = JSON.parse(localStorage.getItem("@tokenKenzieHub"));
        const getInfos = async () => {
            const response = await api.get("/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUserInfo(response.data);
            
        };
        getInfos();
    }, []);
}