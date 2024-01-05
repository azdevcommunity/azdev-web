import NavbarItem from "../../components/home/NavbarItem.tsx";
import useHideNavbarOnScroll from "../../hooks/useHideNavbarOnScroll.ts";
const NavBar = () => {
    useHideNavbarOnScroll();
    return (
        <nav className="navbar w-full flex justify-center items-center">
            <NavbarItem path="home">Home</NavbarItem>
            <NavbarItem path="about-us">About us</NavbarItem>
        </nav>
    );
};

export default NavBar;