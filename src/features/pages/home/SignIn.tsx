
import style from '../../container/signin/style/signin.module.css'
import SignInContainer from "../../container/signin/SignInContainer.tsx";


const SignIn = () => {

    return (
        <>
            <div className={style.landingPageContainer}>
                <SignInContainer />
            </div>
        </>

    );
};

export default SignIn;