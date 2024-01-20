import style from './homeExplore.module.css'
import ExploreSwitch from "./exploreswitch/ExploreSwitch.tsx";
import PostCreate from "./posts/PostCreate.tsx";
import PostInfinityScroll from "./posts/PostInfinityScroll.tsx";

const HomeExplore = () => {
    return (
        <div className={`${style.exploreContainer}`}>
            <ExploreSwitch/>
            <PostCreate/>
            <PostInfinityScroll/>
        </div>
    );
};

export default HomeExplore;