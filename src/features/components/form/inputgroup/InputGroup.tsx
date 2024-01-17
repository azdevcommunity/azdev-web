import style from "./inputgroup.module.css";
import {FC} from "react";

const InputGroup: FC<InputGroupProps> = ({children }) => {
    return (
        <div  className={style.inputGroup}>
            {children}
        </div>
    );
};

export default InputGroup;