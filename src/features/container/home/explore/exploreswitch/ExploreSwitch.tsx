import style from './../homeExplore.module.css'

const ExploreSwitch = () => {

    return (
        <div className={`${style.exploreSwitch}`}>
            <div className={style.exploreTabL}>For you</div>
            <div className={style.exploreTabR}>Following</div>
        </div>
    );
};

export default ExploreSwitch;