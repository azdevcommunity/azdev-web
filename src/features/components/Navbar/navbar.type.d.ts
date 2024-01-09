import {ReactNode} from "react";

interface NavbarProps {
    visibleButtons?: boolean;
}


interface NavbarItemProps {
    children: ReactNode;
    path?: string;
    onClick?: () => void;
    id?: string;
}