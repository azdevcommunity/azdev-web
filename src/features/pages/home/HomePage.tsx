import style from '../../styles/home.module.css'
import NavBar from "../../components/Navbar/NavBar.tsx";
import HomeSection from '../../container/home/HomeSection.tsx';
import BlogSection from '../../container/home/BlogSection/BlogSection.tsx';
import PostSection from '../../container/home/PostSection/PostSection.tsx';

const HomePage = () => {

    return (
        <>
            <div className="top-shadow h-4"></div>
            <div className={`${style.landingPageContainer}`}>
                <NavBar />
                <HomeSection />
                <BlogSection />
                {/* <PostSection /> */}
            </div>
        </>

    );
};


export default HomePage;
