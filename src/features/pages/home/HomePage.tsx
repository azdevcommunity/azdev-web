import NavBar from "../../container/home/NavBar.tsx";
import HomeSection from "../../container/home/HomeSection.tsx";
import './../../styles/home.css'
import AboutUsSection from "../../container/home/AboutUsSection.tsx";

const HomePage = () => {

    return (
        <div className={"homeContainer"}>
            <NavBar  />
            <HomeSection />
            <AboutUsSection/>
        </div>
    );
};


export default HomePage;
