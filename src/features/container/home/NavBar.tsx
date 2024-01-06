 import   {FC} from "react";
 import NavbarItem from "../../components/home/NavbarItem.tsx";


interface Props {

}
const NavBar :FC<Props>= () => {

    return (
        <nav className="navbar w-full flex justify-center items-center">
            <NavbarItem path="#home">Home</NavbarItem>
            <NavbarItem   path="#about-us">About us</NavbarItem>
            <NavbarItem   path="#blog">Blog</NavbarItem>
        </nav>
    );
};

export default NavBar;