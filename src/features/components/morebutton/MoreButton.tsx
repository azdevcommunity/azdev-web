import MoreIcon from "../icons/MoreIcon.tsx";
import {FC} from "react";

interface Props{
    className?: string

}

const MoreButton:FC<Props> = ({className}) => {
    return (
        <div
            className={`${className} cursor-pointer rounded-full hover:text-indigo-400 hover:bg-blue-800 hover:bg-opacity-20 right-1`}>
            <MoreIcon/>
        </div>
    );
};

export default MoreButton;