import   {useState, useEffect, FC} from 'react';


interface  PageProps{

}
const AboutUsSection :FC<PageProps> = ( ) => {
    const count = useCounter(120);
    return (
        <div   id="about-us" className="section">
            <div className={"aboutUsSection text-gray-100 text-5xl font-bold ml-18"}>
                <div className="aboutUsImage">

                </div>
                <div className='aboutUsText'>
                    <div style={{lineHeight: "0.8"}}>Biz insanların proqramlaşdırma</div>
                    <div style={{lineHeight: "0.8"}}>haqqında düşüncə tərzini dəyişirik.</div>
                    <div className={"aboutUsSectionheaderTextBg"}>
                        <span className={"text-white"}>Bu gün </span>
                        başlamaq
                        <span className={"text-white"}> üçün ən yaxşı vaxtdır!</span>
                    </div>

                </div>
            </div>
            <div className="statisticCounterContainer">
                <div className="container">
                    <div className="row text-center">
                        <div className="parentCounterContainer col-xs-12 col-md-3">
                            <div className="counter">
                                <h2 className="timer count-title count-number">{count}</h2>
                                <div className="stats-line-black"></div>
                                <p className="stats-text">İstifadəçilər</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;

const useCounter = (end: number): number => {
    const [count, setCount] = useState(0);
    const durationPerIncrement = getDurationPerIncrement(end);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount < end) {
                    return prevCount + 1;
                }
                clearInterval(interval);
                return end;
            });
        }, durationPerIncrement);

        return () => clearInterval(interval);
    }, [end, durationPerIncrement]);

    return count;
};
const getDurationPerIncrement = (end: number): number => {
    if (end <= 100) return 50;
    if (end <= 200) return 25;
    if (end <= 300) return 12.5;
    return 0;
};
