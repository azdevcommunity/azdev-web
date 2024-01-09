import style from '../../container/home/style/home.module.css'
import NavBar from "../../components/Navbar/NavBar.tsx";
import HomeSection from '../../container/home/HomeSection.tsx';
import BlogSection from '../../container/home/component/BlogSection/BlogSection.tsx';
import PostSection from '../../container/home/component/PostSection/PostSection.tsx';

const HomePage = () => {

    return (
        <>
            <div className="top-shadow h-4"></div>
            <div className={`${style.landingPageContainer}`}>
                <NavBar />
                <HomeSection />
                <BlogSection />
                <PostSection />
            </div>
        </>

    );
};


export default HomePage;
