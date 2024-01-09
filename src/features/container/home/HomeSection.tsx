import React from 'react';
import style from './style/home.module.css';
import SignInForm from '../../components/SignInForm/SignInForm';

const HomeSection: React.FC = () => {
    return (
        <div className={`${style.homeSection}`} id='home'>
            <div className={style.customShadowBottom} id='topShadow'></div>
            <div className={style.signInAndHeaderContainer}>
                <div className={`${style.homeSectionTitleContainer}`}>Kodla birləş!<span>Qoşul və kod dünyamızın bir hissəsi ol.</span>
                </div>
                <SignInForm/>
            </div>
            <div className={style.customShadowBottom}></div>
            <div className={style.homeImage}></div>
        </div>
    );
};

export default HomeSection;
