import React from 'react';
import style from './postSection.module.css';
import ExampleButton from '../../../components/ExampleButton/ExampleButton';

const PostSection: React.FC = () => {
    return (
        <div className={`${style.postSection}`} id='post'>
            <div>Bizə dünyanı göstər, ilk postunu paylaş!</div>
            <ExampleButton />
        </div>
    );
};

export default PostSection; 