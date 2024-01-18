import {NavLink} from "react-router-dom";
import {FC, ReactNode} from "react";
import style from  './../sidebar.module.css'
interface Props {
    children?:  ReactNode,
    path?: string
}

const SideBarLink:FC<Props> = ({children,path}) => {
    return (
        <NavLink   to={path} className={`${style.sidebarLink} `}>
            {children}
        </NavLink>
    );
};

export default SideBarLink;