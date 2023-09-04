import { useEffect, useState } from "react";
import styles from "./styles.module.scss"
import { useNavigate } from "react-router-dom";
import { userProfile } from "./getUser";
import imagem from "../../../assets/Logo.png";
import { Technology } from "./techs/technology";
import { TechModal } from "../techModal/modal";
import { TechModalEdit } from "../techModal/modalEdit";

export function Dashboard ({}){
    const [userInfo, setUserInfo] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [userTechnologies, setUserTechnologies] = useState("");

    const navigate = useNavigate();
    
    userProfile([setUserInfo]);
    useEffect(()=>{
        setUserTechnologies(userInfo.techs);
        console.log(userTechnologies);
    },[userInfo])
    
    function logout(){
        localStorage.removeItem("@tokenKenzieHub");
        setUserToken(null);
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
                        <aside>
                            <p className="title2">Tecnologias</p>
                            <button onClick={()=> setIsVisible(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                    <rect x="0.514648" width="32.4853" height="32" rx="4" fill="#212529"/>
                                    <path d="M15.9721 21.5625H18.1055V17.3281H22.4041V15.2266H18.1055V11H15.9721V15.2266H11.6814V17.3281H15.9721V21.5625Z" fill="white"/>
                                </svg>
                            </button>
                        </aside>
                        <ul>
                            <Technology userTechnologies={userTechnologies} setVisible2={setIsVisible2}/>
                        </ul>
                    </div>
                </div>
            </div>
            { isVisible ? <TechModal setVisible={setIsVisible}/> : null}
            { isVisible2 ? <TechModalEdit setVisible2={setIsVisible2}/> : null}
        </>
    )
}