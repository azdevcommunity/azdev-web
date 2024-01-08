import style from '../../styles/home.module.css'
import NavBar from "../../components/Navbar/NavBar.tsx";
import HomeSection from '../../container/home/HomeSection.tsx';

const HomePage = () => {

    return (
        <>
            <div className="top-shadow h-4"></div>
            <div className={`${style.landingPageContainer}`}>
                <NavBar />
                <HomeSection />
            </div>
        </>

    );
};


export default HomePage;
