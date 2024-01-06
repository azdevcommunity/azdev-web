import {FC, ReactNode} from "react";

interface Props {
    children: ReactNode,
    path?: string,
}


const NavbarItem: FC<Props> = ({children, path}) => {


    return (
        <div className="navbarItem block uppercase cursor-pointer text-gray-200">
            <a href={path}>
                {children}
            </a>
        </div>

    );
};

export default NavbarItem;