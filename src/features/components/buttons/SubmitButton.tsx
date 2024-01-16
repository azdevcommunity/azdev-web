import style from "./submitbutton.module.css";
import {FC} from "react";


const SubmitButton: FC<Props> = ({children, buttonType = "submit"}) => {
    return (
        <button type={buttonType} className={style.submitButton}>{children}</button>
    );
};

export default SubmitButton;