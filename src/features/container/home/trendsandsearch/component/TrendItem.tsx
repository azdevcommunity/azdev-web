import style from '../trendsandsearch.module.css'
import TrendItemMore from "./TrendItemMore.tsx";

const TrendItem = ({hashtag, posts}) => (
    <div className={style.trendItem}>
        <div>
            <span className="text-sm font-medium text-gray-700">{hashtag}</span>
            <span className="text-sm ">{posts}</span>
        </div>
        <TrendItemMore/>
    </div>
);

export default TrendItem;