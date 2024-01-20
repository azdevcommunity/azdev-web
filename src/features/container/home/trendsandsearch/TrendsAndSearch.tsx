import SearchBar from "../../../components/searchbar/SearchBar.tsx";
import style from './trendsandsearch.module.css'
import Trends from "./component/Trends.tsx";

const TrendsAndSearch = () => {
    return (
        <div className={style.trendsAndSearchContainer}>
            <SearchBar/>
            <Trends/>
        </div>
    );
};

export default TrendsAndSearch;