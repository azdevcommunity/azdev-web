import {BellIcon, HomeIcon, InboxIcon, TrashIcon} from "@heroicons//react/outline";
import SideBarLink from "./component/SideBarLink.tsx";
import style from './sidebar.module.css'
const Sidebar = () => {
    return (


        <div
            className={`${style.sidebarContainer} md:w-64 w-14 md:space-y-6 space-y-2 py-7 md:px-2 px-1`}>
            <nav className={`${style.sidebar}`}>
                <SideBarLink path="#">
                    <HomeIcon className="w-7 h-7"/>
                    <div className="hidden mx-5 md:inline">Home</div>
                </SideBarLink>
                <SideBarLink path="#">
                    <TrashIcon className="w-7 h-7"/>
                    <div className="hidden mx-5 md:inline">Explore</div>
                </SideBarLink>
                <SideBarLink path="#">
                    <BellIcon className="w-7 h-7"/>
                    <div className="hidden mx-5 md:inline">Notifications</div>
                </SideBarLink>
                <SideBarLink path="#">
                    <InboxIcon className="w-7 h-7"/>
                    <div className="hidden mx-5 md:inline">Messages</div>
                </SideBarLink>
            </nav>

        </div>
    );
};

export default Sidebar;