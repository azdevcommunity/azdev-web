import {FC, ReactNode} from "react";
import {useNavigate} from "react-router-dom";
import routing from "../../utils/routing.ts";

interface Props {
    children: ReactNode,
    path?: string
}

const NavbarItem: FC<Props> = ({children, path}) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => {
            routing.routeTo(navigate, path ?? "/")
        }} className="navbarItem uppercase cursor-pointer   text-gray-200">
            {children}
        </div>
    );
};

export default NavbarItem;