import React from 'react';
import style from './postSection.module.css';

const PostSection: React.FC = () => {
    return (
        <div className={`${style.postSection}`} id='post'>
            <div>Bizə dünyanı göstər, ilk postunu paylaş!</div>

        </div>
    );
};

export default PostSection; 