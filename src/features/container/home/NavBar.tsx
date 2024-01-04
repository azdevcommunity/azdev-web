import NavbarItem from "../../components/home/NavbarItem.tsx";

const NavBar = () => {
    return (
        <nav className="navbar w-full flex justify-center items-center  ">


                <NavbarItem>Home</NavbarItem>
                <NavbarItem path="/about-us">About us</NavbarItem>
                <NavbarItem>Elements</NavbarItem>
                <NavbarItem>Demos</NavbarItem>
                <NavbarItem>Login</NavbarItem>

        </nav>
    );
};

export default NavBar;