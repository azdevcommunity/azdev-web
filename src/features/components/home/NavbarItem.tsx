import { FC, ReactNode } from "react";
// useNavigate is no longer needed since we're not routing, but scrolling within the page
// import { useNavigate } from "react-router-dom";
// import routing from "../../utils/routing.ts"; // This can be removed if not used elsewhere

interface Props {
    children: ReactNode,
    path?: string
}

function isInViewport(element : any) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


// Use the FC (Function Component) type from React with Props
const NavbarItem: FC<Props> = ({ children, path }) => {
    const handleClick = () => {
        // Make sure to check if path is provided
        if (path) {
            const section = document.getElementById(path);
            if (section && !isInViewport(section)) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div onClick={handleClick} className="navbarItem uppercase cursor-pointer text-gray-200">
            {children}
        </div>
    );
};

export default NavbarItem;