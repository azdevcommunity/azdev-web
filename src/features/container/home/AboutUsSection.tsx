import { useState, useEffect } from 'react';

const getDurationPerIncrement = (end: number): number => {
    if (end <= 100) return 50;         // Slower pace for numbers up to 100
    if (end <= 200) return 25;         // Faster pace for numbers 101-200
    if (end <= 300) return 12.5;       // Even faster for 201-300
    return 0;                         // Fastest pace for numbers above 300
};

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

const AboutUsSection = () => {
    const count = useCounter(120);
    return (
        <>
            <div className={"aboutUsSection text-gray-100 text-5xl font-bold ml-18"}>
                <div className="aboutUsImage mr-8">

                </div>
                <div className='aboutUsText'>
                    <div style={{ lineHeight: "0.8" }}>Biz insanların proqramlaşdırma</div>
                    <div style={{ lineHeight: "0.8" }}>haqqında düşüncə tərzini dəyişirik.</div>
                    <div className={"aboutUsSectionheaderTextBg"} >
                        <span className={"text-white"}>Bu gün </span>
                        başlamaq
                        <span className={"text-white"}> üçün ən yaxşı vaxtdır!</span>
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
            </div>
        </>
    );
};

export default AboutUsSection;