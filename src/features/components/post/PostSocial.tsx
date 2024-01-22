import {FC, ReactNode} from "react";
import style from './post.module.css'
interface Props {
    children: ReactNode,
}


const PostSocial: FC<Props> = ({children}) => {
    return (
        <div className={style.postSocial}>
            {children}
        </div>
    )
};

export default PostSocial;