import { useEffect, useState } from "react";
import { api } from "../../../api/axios";
import styles from "./styles.module.scss"
import { useNavigate } from "react-router-dom";
import { userProfile } from "./getUser";

export function Dashboard (){
    const [userInfo, setUserInfo] = useState("");

    const navigate = useNavigate();


    userProfile([setUserInfo]);
    
    
    function logout(){
        localStorage.clear();
        navigate("/");
    }
    
    console.log(userInfo.name);

    return(
        <>
        {!userInfo === ""?(
            <div className={styles.contentDashboard}>
            <div className="container">
                    <div className={styles.contentLogo}>
                    <img src="../../assets/Logo.svg" alt="kenzie" />
                    <button onClick={logout}>Sair</button>
                </div>
            </div>
            <div className="container">
                <div className={styles.divProfile}>
                    <h1 className="title1">CARREGANDO </h1>
                    <p className="headline">CARREGANDO</p>
                </div>
            </div>
            <div className="container">
                <div className={styles.divDashboard}>
                    <h1 className="title1">Que pena! Ainda estamos em desenvolvimento :( </h1>
                    <p className="title2">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </div>
            </div>
        </div>
        ):(
            <div className={styles.contentDashboard}>
            <div className="container">
                    <div className={styles.contentLogo}>
                    <img src="../../assets/Logo.svg" alt="kenzie" />
                    <button onClick={logout}>Sair</button>
                </div>
            </div>
            <div className="container">
                <div className={styles.divProfile}>
                    <h1 className="title1">Olá {userInfo.name}</h1>
                    <p className="headline">{userInfo.course_module}</p>
                </div>
            </div>
            <div className="container">
                <div className={styles.divDashboard}>
                    <h1 className="title1">Que pena! Ainda estamos em desenvolvimento :( </h1>
                    <p className="title2">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </div>
            </div>
        </div>
        )}
        </>
    )
}