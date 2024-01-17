import React, {useState} from 'react';
import style from './style/home.module.css';
import GoogleSignInButton from './component/GoogleSignInButton/GoogleSignInButton';
import GithubSignInButton from './component/GithubSignInButton/GithubSignInButton';
import CustomButton from './component/CustomBlueButton/CustomBlueButton';
import Footer from '../../components/Footer/FooterLink';
import SigninPopup from "../../components/SigninPopup/PopUp.tsx";

const HomeSection: React.FC = () => {
    const [isOpen, setOpen] = useState(true);
    return (
        <>
            <div className={style.landingPageContainer}>
                <div className={`${style.homeSection}`} id='home'>
                    <div className={style.homeSectionImageContainer}>
                        <img src="/assets/home/azdev_logo.png" className={style.homeSectionImage} alt={"azdev_logo"}/>
                    </div>
                    <div className={style.loginAndSignUpContainer}>
                        <div className={style.loginAndSignUpTextHeader}>
                            Happening now
                            <div className={style.loginAndSignUpText}>
                                Join today.
                            </div>
                        </div>
                        <GoogleSignInButton/>
                        <GithubSignInButton/>
                        <div className="flex items-center justify-center my-8 mt-2 mb-2">
                            <div className="flex-grow border-t border-gray-500"></div>
                            <span className="mx-2 text-sm text-gray-300">və ya</span>
                            <div className="flex-grow border-t border-gray-500"></div>
                        </div>
                        <CustomButton value="Hesab yarat"/>
                        <div className={style.privacyAndTermText}>
                            Qeydiyyatdan keçməklə siz <a href="#terms-of-service"
                                                         className="hover:underline text-blue-500">Kuki
                            istifadəsi</a> də daxil olmaqla <a href="#privacy-policy"
                                                               className="hover:underline text-blue-500">Xidmət
                            Şərtləri </a> və <a href="#cookie-use" className="hover:underline text-blue-500">Məxfilik
                            Siyasəti</a> ilə razılaşırsınız.
                        </div>
                        <div className={style.alreadyHaveAccountContainer}>
                            Hesabınız var?
                            <CustomButton onClick={() => {
                                setOpen(true)
                            }} value="Daxil ol" className="signInButton"/>
                        </div>
                        <SigninPopup isOpen={isOpen} toggle={setOpen}/>
                        <button
                            data-modal-target={"1"}
                            data-modal-toggle={"1"}
                        >dasdas
                        </button>
                    </div>

                </div>

                <Footer/>
            </div>
        </>

    );
};

export default HomeSection;
