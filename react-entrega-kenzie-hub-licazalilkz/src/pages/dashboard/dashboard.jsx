import { useState } from "react";
import styles from "./styles.module.scss"
import { useNavigate } from "react-router-dom";
import { userProfile } from "./getUser";
import imagem from "../../../assets/Logo.png";

export function Dashboard (){
    const [userInfo, setUserInfo] = useState("");

    const navigate = useNavigate();


    userProfile([setUserInfo]);
    
    function logout(){
        localStorage.removeItem("@tokenKenzieHub");
        window.location.reload(false);
    }

    return(
        <>
            <div className={styles.contentDashboard}>
                <div className="container">
                        <div className={styles.contentLogo}>
                        <img src={imagem} alt="kenzie" />
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
        </>
    )
}