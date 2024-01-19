import SearchBar from "../../../components/searchbar/SearchBar.tsx";
import Trends from "./Trends.tsx";
import style from './trendsandsearch.module.css'
const TrendsAndSearch = () => {
    return (
        <div className={style.trendsAndSearchContainer}>
            <SearchBar/>
            <Trends/>
        </div>
    );
};

export default TrendsAndSearch;