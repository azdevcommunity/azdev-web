import {FC} from "react";
import style from './navbar.module.css';
import {NavbarItemProps} from "./navbar.type";


const NavbarItem: FC<NavbarItemProps> = ({children, path, onClick, id}) => {

    const content = path
        ? (
            <a href={path} className={`${style.navbarItem}`}>
                {children}
            </a>
        ) : id ? (
            <div onClick={onClick} className={`${style.joinUsBtn} ${id}`}>
                {children}
            </div>
        ) : (
            <div onClick={onClick} className={`${style.navbarItemButton}`}>
                {children}
            </div>
        );

    return (
        <div className={`block uppercase cursor-pointer text-gray-200`}>
            {content}
        </div>
    );
};

export default NavbarItem;