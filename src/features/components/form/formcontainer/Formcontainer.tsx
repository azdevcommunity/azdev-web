
import style from "./formcontainer.module.css";
import {FC} from "react";

const FormContainer:FC<Props> = ({children}) => {
    return (
        <div className={style.formContainer}>
            {children}
        </div>
    );
};

export default FormContainer;