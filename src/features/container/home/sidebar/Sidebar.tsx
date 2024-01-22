import SideBarLink from "./component/SideBarLink.tsx";
import style from './sidebar.module.css'
import {BellIcon, HomeIcon, InboxIcon, TrashIcon} from "@heroicons/react/24/outline";
const Sidebar = () => {
    return (


        <div
            className={`${style.sidebarContainer} md:w-64 w-14 md:space-y-6 space-y-2 py-7 md:px-2 px-1`}>
            <nav className={`${style.sidebar}`}>
                {
                    sidebarData.map(item=>(
                        <SideBarLink path={item.path} key={item.id}>
                            {item.icon}
                            <div className="hidden mx-5 md:inline">{item.text}</div>
                        </SideBarLink>
                    ))
                }
            </nav>

        </div>
    );
};

export default Sidebar;
const sidebarData = [
    {
        icon: <HomeIcon className="w-7 h-7"/>,
        path: '/home',
        text: 'Home',
        id: "home"
    },
    {
        icon: <TrashIcon className="w-7 h-7"/>,
        path: '#',
        text: 'Explore',
        id: "explore"
    },
    {
        icon: <BellIcon className="w-7 h-7"/>,
        path: '#',
        text: 'Notifications',
        id: "notifications"
    },
    {
        icon: <InboxIcon className="w-7 h-7"/>,
        path: '#',
        text: 'Messages',
        id: "messages"
    },
]