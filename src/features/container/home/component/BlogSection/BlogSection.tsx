import React from 'react';
import style from './blogSection.module.css';
import CategoryCard from '../CategoryCard/CategoryCard.tsx';

const BlogSection: React.FC = () => {
    return (
        <div className={`${style.blogSection}`} id='blog'>
            <div className={style.blogTextsContainer}>
                <span className={style.blogHeaderText}>Birlikdə qurduğumuz məqalələri kəşf edin.</span>
                <span>Cəmiyyətimiz birgə məqalələri kəşf etmək və paylaşmaq üçün platforma təqdim edir.
                        Seniorlar hər bir məqaləyə birbaşa fikirlərini əlavə edərək, bilik mübadiləsini bir addım irəli aparırlar.</span>
            </div>
            <div className={style.cardContainer}>
                <div>
                    <CategoryCard title='Mobile development'
                                  imageUrl='.../../../../../public/assets/home/mobile_dev_card.png'/>
                </div>
               <div>
                   <CategoryCard title='Software development'
                                 imageUrl='.../../../../../public/assets/home/software_dev.png'/>
               </div>
               <div>
                   <CategoryCard title='System design' imageUrl='.../../../../../public/assets/home/system_design.png'/>

               </div>
               <div>
                   <CategoryCard title='Game development' imageUrl='.../../../../../public/assets/home/game_dev.png'/>

               </div>
               <div>
                   <CategoryCard title='Cyber security' imageUrl='.../../../../../public/assets/home/cyber_sec.png'/>

               </div>
                <CategoryCard title='Data Science' imageUrl='.../../../../../public/assets/home/data_scienece.png'/>
               <div></div>
            </div>
        </div>
    );
};

export default BlogSection;