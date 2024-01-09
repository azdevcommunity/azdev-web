import NavbarItem from "./NavbarItem.tsx";
import style from './navbar.module.css'
import {FC} from "react";
import routing from "../../utils/routing.ts";
import {useNavigate} from "react-router-dom";
import {NavbarProps} from "./navbar.type";


const NavBar: FC<NavbarProps> = ({visibleButtons= true}  ) => {

    const navigate = useNavigate();

    return (
        <div className={`${style.navbarContainer}`}>
            <nav className={`${style.navbar}`}>
                <div className={`${style.logoContainer}`}>
                    <h1 onClick={() => routing.routeTo(navigate, "/")}  className={style.logo}>AZDEV</h1>
                </div>
                {visibleButtons && <div className={`${style.navbarItemsContainer}`}>
                    <NavbarItem path="#home">Ana səhifə</NavbarItem>
                    <NavbarItem path="#blog">Bloq</NavbarItem>
                    <NavbarItem path="#post">Forum</NavbarItem>
                    <NavbarItem onClick={() => routing.routeTo(navigate, "/register")} id="joinUsBtn">Qatıl</NavbarItem>
                    <NavbarItem onClick={() => routing.routeTo(navigate, "/login")} >Daxil ol</NavbarItem>
                </div>}
            </nav>
        </div>
    );
};


export default NavBar;