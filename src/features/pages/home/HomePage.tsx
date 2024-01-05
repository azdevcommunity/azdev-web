import NavBar from "../../container/home/NavBar.tsx";
import HomeSection from "../../container/home/HomeSection.tsx";
import './../../styles/home.css'
import AboutUsSection from "../../container/home/AboutUsSection.tsx";

const HomePage = () => {
    return (
        <div className={"homeContainer"}>
            <NavBar />
            <div id="home" className="section">
                <HomeSection />
            </div>
            <div id="about-us" className="section">
                <AboutUsSection />
            </div>
            {/* Add more sections with respective ids here */}
        </div>
    );
};


export default HomePage;
