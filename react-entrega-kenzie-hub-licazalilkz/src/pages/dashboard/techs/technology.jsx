import { useContext } from "react"
import { modalContext } from "../../../context/modalContext"
import { useForm } from "react-hook-form";

export const Technology = ({userTechnologies, setVisible2}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {getTechId, deleteTech} = useContext(modalContext);

    const submit =  async (id) => {
        await getTechId(id);
    }

    const submitDel = () => {
        deleteTech();
    }

    return(
        <>
                {userTechnologies ?(
                    userTechnologies.map((tech)=>{
                        // console.log(tech); 
                        return <li>
                            <div>
                                <p>{tech.title}</p>
                            </div>
                            <div>
                                <p>{tech.status}</p>
                                <button onClick={event => {
                                    setVisible2(true);
                                    submit(tech.id);
                                }}>editar</button>
                                <button onClick={event =>{
                                    submit(tech.id);
                                    submitDel();
                                }}>excluir</button>
                            </div>
                        </li>
                    })
                    ):(
                    <p>Você ainda não possui nenhum lançamento</p>
                )}
        </>
    )
}