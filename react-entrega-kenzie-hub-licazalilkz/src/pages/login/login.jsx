import styles from "./styles.module.scss";
import { Input } from "../../components/input/input";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import { loginSchema } from "./formSchemaLogin";
import {zodResolver} from "@hookform/resolvers/zod";
import {api} from "../../../api/axios";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';


export function Login(){

    const { register, handleSubmit, formState:{errors},} = useForm({
        resolver: zodResolver(loginSchema),
    });

    
    const submitLogin = async (formData) => {
        try{
            const token = await api.post("/sessions", formData);
            localStorage.setItem("@tokenKenzieHub", JSON.stringify(token.data.token));
            toast.success("Bem vindo de volta !");
            navigate("/dashboard");
        }catch(error){
            toast.error("Ops, algo deu errado !");
            console.log(error);
        }
    };
    
    const navigate = useNavigate();

    function registerPage(){
        navigate("/register");
    };

    return(
        <div className={styles.loginContainer}>
            <div className={styles.contentLogo}>
                <img src="../../assets/Logo.svg" alt="kenzie" />
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