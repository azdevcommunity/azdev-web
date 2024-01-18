import style from './homeExplore.module.css'
import ExploreSwitch from "./exploreswitch/ExploreSwitch.tsx";
const HomeExplore = () => {
    return (
        <div  className={`${style.exploreContainer}`}>
            <ExploreSwitch/>
            <div>
                Explore
            </div>
        </div>
    );
};

export default HomeExplore;