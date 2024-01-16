import HomeSection from '../../container/home/HomeSection';
import style from '../../container/home/style/home.module.css'

const HomePage = () => {

    return (
        <>
            <div className={style.landingPageContainer}>
                <HomeSection />
            </div>
        </>

    );
};

export default HomePage;