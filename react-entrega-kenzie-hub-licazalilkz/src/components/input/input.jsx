import { forwardRef } from "react";
import styles from "./style.module.scss";


export const Input = forwardRef(({nome, placeholder, type, required, ...rest}, ref) => {
    required = {required};
    return (
        <>
            {type === "select" ?(
                    <div className={styles.content}>
                        <label>{nome}</label>
                        <select placeholder={placeholder} ref={ref} {...rest}>
                            <option value=""  disabled hidden>Escolha seu modulo !</option>
                            <option value="modulo 1"> Modulo 1</option>
                            <option value="modulo 2"> Modulo 2</option>
                            <option value="modulo 3"> Modulo 3</option>
                            <option value="modulo 4"> Modulo 4</option>
                            <option value="modulo 5"> Modulo 5</option>
                            <option value="modulo 6"> Modulo 6</option>
                        </select>
                        {/* <select type={type} placeholder={placeholder} ref={ref} {...rest} />
                        <span>msg de erro</span> */}
                    </div>

                    
                ):(
                    <div className={styles.content}>
                        <label>{nome}</label>
                        <input type={type} placeholder={placeholder} required={true} ref={ref} {...rest} />
                    </div>
                )
            }
        </>

    );
});