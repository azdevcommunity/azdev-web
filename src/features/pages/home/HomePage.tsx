import NavBar from "../../container/home/NavBar.tsx";
import DeveloperSection from "../../container/home/DeveloperSection.tsx";
import './../../styles/home.css'

const HomePage = () => {
    return (
        <div  className={"homeContainer"}>
            <NavBar/>
            <DeveloperSection/>
        </div>
    );
};

export default HomePage;
