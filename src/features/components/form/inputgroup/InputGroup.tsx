
import style from "./inputgroup.module.css";
import {FC} from "react";

const InputGroup:FC<Props> = ({children}) => {
    return (
        <div className={style.inputGroup}>
            {children}
        </div>
    );
};

export default InputGroup;