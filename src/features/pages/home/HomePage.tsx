import NavBar from "../../container/home/NavBar.tsx";
import DeveloperSection from "../../container/home/DeveloperSection.tsx";
import './../../styles/home.css'
import AboutUsSection from "../../container/home/AboutUsSection.tsx";

const HomePage = () => {
    return (
        <div  className={"homeContainer"}>
            <NavBar/>
            <DeveloperSection/>
            <AboutUsSection/>
        </div>
    );
};

export default HomePage;
