import styles from "./styles.module.scss";
import { Input } from "../../components/input/input";
import {useForm} from "react-hook-form";
import { registerSchema } from "./formSchemaRegister";
import {zodResolver} from "@hookform/resolvers/zod";
import { api } from "../../../api/axios";
import {useNavigate} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { UserContext } from "../../context/userContext";
import { useContext } from "react";


export function Register(){

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(registerSchema),
    });

    const navigate = useNavigate();
    // console.log(errors)
    const { register: userRegister } = useContext(UserContext)
    const submit =  (formData) => {
        userRegister(formData)
    }

    function loginPage(){
        navigate("/");
    }

    return(
        <div className={styles.registerConteiner}> 
            <div className={styles.contentLogo}>
                <img src="../../../assets/Logo.png" alt="kenzie" />
                <button onClick={loginPage}>Voltar</button>
            </div>

            <div className={styles.content}>
                <h1 className="title1">Crie sua conta</h1>
                <p className="headline">Rapido e grátis, vamos nessa</p>
                <form onSubmit={handleSubmit(submit)}>
                    <Input  
                            nome="Nome"
                            placeholder="digite seu nome"
                            type="text"
                            {...register("name")}
                     />
                    <Input  nome="Email"
                            placeholder="digite seu email"
                            type="email"
                            {...register("email")}
                     />
                    <Input  nome="Senha"
                            placeholder="digite sua senha"
                            type="password"
                            {...register("password")}
                     />
                    <Input  nome="Confirmar senha"
                            placeholder="digite sua senha novamente"
                            type="password"
                            {...register("confirmPassword")}
                     />
                    <Input  nome="Bio"
                            placeholder="fale sobre você"
                            type="text"
                            {...register("bio")}
                     />
                    <Input  nome="contato"
                            placeholder="opção de contato"
                            type="text"
                            {...register("contact")}
                     />
                    <Input  nome="Selecionar módulo"
                            placeholder="modulo"
                            type="select"
                            {...register("course_module")}
                     />
                     <button type="submit">Cadastrar</button>
                </form>
            </div>
            <ToastContainer/>
        </div>
    )
}