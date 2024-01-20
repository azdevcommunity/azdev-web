
import style from './../trendsandsearch.module.css'
import TrendItem from "./TrendItem.tsx";

const trends = [
    {hashtag: '#cop29', posts: '7,412 posts', id: "dasda"},
    {hashtag: '#DavosEconomicForum', posts: '29.3K posts', id: "#@1323"},
    {hashtag: '#Karabakh', posts: '45k', id: "Dasdasda"},
    // ... other trends
];

const Trends = () => {
    return (

            <div className={`${style.trendsContainer} dark:bg-trend-dark`}>
                <div className="text-lg font-semibold  p-4">
                    Trends for you
                </div>
                {trends.map(trend =>
                    <TrendItem key={trend.id} hashtag={trend.hashtag} posts={trend.posts}/>
                )}
            </div>


    );
};

export default Trends;

