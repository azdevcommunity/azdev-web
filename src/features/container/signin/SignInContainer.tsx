import React, {useState, useEffect} from 'react';
import style from './style/signin.module.css';
import GoogleSignInButton from './component/GoogleSignInButton/GoogleSignInButton';
import GithubSignInButton from './component/GithubSignInButton/GithubSignInButton';
import CustomButton from './component/CustomBlueButton/CustomButton.tsx';
import SignInModal from './component/SignInModal/SignInModal.tsx';
import {useDisclosure} from '@nextui-org/react';
import Footer from "./component/Footer/FooterLink.tsx";
import {useNavigate} from "react-router-dom";

const SignInContainer: React.FC = () => {
    const [isScrollbarHidden, setIsScrollbarHidden] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure();
    const toggleScrollbar = () => {
        setIsScrollbarHidden(!isScrollbarHidden);
    };
    const navigate = useNavigate();

    useEffect(() => {
        if (isScrollbarHidden) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
    }, [isScrollbarHidden]);
    const onSignInClick = () => {
        onOpen()
        toggleScrollbar();
    }
    const onSignInModalClose =()=>{
        onClose()
        isScrollbarHidden && toggleScrollbar();
    }
    return (
        <>
            <div className={style.landingPageContainer}>
                <div className={`${style.homeSection}`} id='home'>
                    <div

                        onClick={()=>{
                            navigate("/home")
                        }}
                        className={style.homeSectionImageContainer}>
                        <img src="/assets/home/azdev_logo.png" className={style.homeSectionImage} alt={"azdev_logo"}/>
                    </div>
                    <div className={style.loginAndSignUpContainer}>
                        <div className={style.loginAndSignUpTextHeader}>
                            Daha çox kəşf et
                            <div className={style.loginAndSignUpText}>
                                İndi qoşul.
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
                            <CustomButton onClick={onSignInClick} value="Daxil ol" className="signInButton"/>
                        </div>
                        <SignInModal isOpen={isOpen} onClose={onSignInModalClose}/>
                    </div>
                </div>
               <Footer/>
            </div>
        </>
    );
};

export default SignInContainer;
