import { useForm } from "react-hook-form";
import styles from "./styles.module.scss"
import { useContext } from "react";
import { modalContext } from "../../context/modalContext";

export const TechModal = ({setVisible}) => {

    const { handleSubmit, register, formState: {errors}} = useForm();
    const{ createTech } = useContext(modalContext);

    const onSubmit = (formData) => {
        createTech(formData);
    }

    return(
        <div className={styles.modal} role="dialog">
            <div className={styles.modalBox}>
                <header>
                    <h1>Cadastrar Tecnologia</h1>
                    <button onClick={()=>setVisible(false)}>x</button>
                </header>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.modalPHolder}>
                    <div>
                        <label htmlFor="tech">Nome</label>
                        <input name="tech" type="text" {...register("title")}/>
                    </div>
                    <div>
                        <label htmlFor="status">Status</label>
                        <select name="status" {...register("status")}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediario">Intermediario</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </div>
                    <button>
                        Cadastrar Tecnologia
                    </button>
                </form>
            </div>
        </div>
    )
}