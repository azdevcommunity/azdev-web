import { FC } from 'react';


interface PageProps {

}
const BlogPreviewSection: FC<PageProps> = () => {
    return (
        <div id="blog" className="section">

            <div className='blogText'>
                <div className='blogTextHeader'>
                    Kodların ötəsində bir cəmiyyət
                </div>
                Kodlar dünyanı dəyişə bilər, lakin həqiqi ilərləmə bilik paylaşılanda başlayır. Cəmiyyətimiz ideyaların sərbəst axını və innovativ həllərin inkişafını dəstəkləyən tutqulu developer'lar üçün görüş nöqtəsidir. Ən son trendlər, dərin texniki məqalələr, qabaqcıl inkişaf təcrübələri və sektor anlayışları – bunların hamısı sizin üçün buradadır.

                Hər həftə bu sahədə ən parlaq ağıllar tərəfindən yazılmış məzmunla məlumatlandırılın və ilham alın. Qoşulun, öyrənin və öz uğur hekayənizi yazmağa başlayın.
            </div>
            <div className='blogWindowImage'></div>
        </div>
    );
};

export default BlogPreviewSection;