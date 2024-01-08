import NavbarItem from "./NavbarItem.tsx";
import style from '../../styles/home.module.css'
import { FC } from "react";


 
const NavBar: FC<NavbarProps> = () => {

    return (
        <div className={`${style.navbarContainer}`}>
            <nav className={`${style.navbar}`}>
                <div className={`${style.logoContainer}`} >
                    {/* <img src="/logo.png" alt="logo" /> */}
                    <h1 style={{color: "white",fontSize: "2rem",fontWeight: "bold"}} className={"logo"}>AZDEV</h1>
                </div>
                <div className={`${style.navbarItemsContainer}`}>
                    <NavbarItem path="#home">Ana səhifə</NavbarItem>
                    <NavbarItem path="#blog">Bloq</NavbarItem>
                    <NavbarItem path="#post">Forum</NavbarItem>
                    <NavbarItem id="joinUsBtn">Qatıl</NavbarItem>
                    <NavbarItem onClick={() => {}}>Daxil ol</NavbarItem>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;