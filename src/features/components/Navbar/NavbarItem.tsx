import { FC, ReactNode } from "react";
import style from '../../styles/home.module.css';

interface Props {
    children: ReactNode;
    path?: string;
    onClick?: () => void; // Add an onClick event for button functionality
}

const NavbarItem: FC<Props> = ({ children, path, onClick }) => {
    // If 'path' is provided, render as a link, otherwise render as a button
    const content = path ? (
        <a href={path} className={`${style.navbarItem}`}>
            {children}
        </a>
    ) : (
        <button onClick={onClick} className={`${style.navbarItemButton}`}>
            {children}
        </button>
    );

    return (
        <div className={`block uppercase cursor-pointer text-gray-200`}>
            {content}
        </div>
    );
};

export default NavbarItem;