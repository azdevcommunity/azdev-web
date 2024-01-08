import { FC, ReactNode } from "react";
import style from '../../styles/home.module.css';

interface Props {
    children: ReactNode;
    path?: string;
    onClick?: () => void;
    id?: string;
}

const NavbarItem: FC<Props> = ({ children, path, onClick ,id}) => {

    const content = path
    ? (
        <a href={path} className={`${style.navbarItem}`}>
            {children}
        </a>
    ) : id ? ( 
        <div className={`${style.joinUsBtn} ${id}`}>
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