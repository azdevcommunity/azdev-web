import {Outlet} from "react-router-dom";
import style from './mainLayout.module.css';
import Sidebar from "../../container/home/sidebar/Sidebar.tsx";


const MainLayout = () => {
    return (
        <div className={style.homeLayout}>
            <Sidebar/>
            <Outlet/>

        </div>
    );
};

export default MainLayout;