import styles from "./styles.module.scss";
import { Input } from "../../components/input/input";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import { loginSchema } from "./formSchemaLogin";
import {zodResolver} from "@hookform/resolvers/zod";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import imagem from "../../../assets/Logo.png"


export function Login(){

    const { register, handleSubmit, formState:{errors},} = useForm({
        resolver: zodResolver(loginSchema),
    });

    const { login: userLogin } = useContext(UserContext);
    
    const submitLogin = (formData) => {
        userLogin(formData);
    };
    
    const navigate = useNavigate();

    function registerPage(){
        navigate("/register");
    };

    return(
        <div className={styles.loginContainer}>
            <div className={styles.contentLogo}>
                <img src={imagem} alt="kenzie" />
            </div>
            <div className={styles.content}>
                <form onSubmit={handleSubmit(submitLogin)}>
                    <Input  
                            nome="Email"
                            placeholder="digite seu Email"
                            type="text"
                            {...register("email")}
                     />
                     <Input  
                            nome="Senha"
                            placeholder="digite sua Senha"
                            type="password"
                            {...register("password")}

                     />
                    <button className={styles.buttonLogin} type="submit">Entrar</button>
                </form>

                <p>Ainda não possui uma conta ?</p>

                <button className={styles.buttonRegister} onClick={registerPage}>Cadastrar-se</button>

            </div>
            <ToastContainer/>
        </div>
    )
}