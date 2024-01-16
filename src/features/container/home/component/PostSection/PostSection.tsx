import React from 'react';
import style from './postSection.module.css';

const PostSection: React.FC = () => {
    return (
        <div className={style.postSection} id='post'>
            <div className={style.title}>Bizə dünyanı göstər, ilk postunu<span className={style.shareTextGradient}> paylaş!</span></div>
            <button className={style.shareButton}>Paylaş</button>
            <div className={style.customShadowBottom}></div>
        </div>
    );
};

export default PostSection; 