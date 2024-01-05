import Button from "../../components/home/Button";
 
const HomeSection = () => {
    return (
        <>
            <div className={"developerSection text-gray-100 text-8xl font-bold ml-24"}>
                <div className={"headerTextBg"} ><span className={"text-white"}>Bizə </span>develpero</div>
                <div style={{lineHeight:"0.5"}}>olaraq qatılmaq </div>
                <div style={{lineHeight:"1.1"}} className="animate-charcter">istəyirsən? </div>
                <Button onClick={() => { }} >Qatıl</Button>
            </div>
            
        </>
    );
};

export default HomeSection;

