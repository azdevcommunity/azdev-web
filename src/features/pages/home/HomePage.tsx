import NavBar from "../../container/home/NavBar.tsx";
import HomeSection from "../../container/home/HomeSection.tsx";
import './../../styles/home.css'
import AboutUsSection from "../../container/home/AboutUsSection.tsx";
import BlogPreviewSection from "../../container/home/BlogPreviewSection.tsx";

const HomePage = () => {

    return (
        <div className={"homeContainer"}>
            <NavBar />
            <HomeSection />
            <AboutUsSection />
            <BlogPreviewSection />
        </div>
    );
};


export default HomePage;
