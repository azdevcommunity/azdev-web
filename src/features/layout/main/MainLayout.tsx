import {Outlet} from "react-router-dom";
import  style from './mainLayout.module.css';
import Sidebar from "../../container/home/sidebar/Sidebar.tsx";
import Trends from "../../container/home/trends/Trends.tsx";


const MainLayout = () => {
    return (
        <div className={style.homeLayout}>
            <Sidebar/>
            <Outlet/>
            <Trends/>
        </div>
    );
};

export default MainLayout;