import routing from "../../utils/routing.ts";
import style from "./postDetail.module.css";
import {ArrowLeftIcon} from "@heroicons/react/24/outline";
import {useNavigate} from "react-router-dom";

const PostDetailTop = () => {
    const navigate = useNavigate();

    return (
        <div className={"flex px-3 py-2 items-center topTransparentBg w-full mb-2 "}>
            <div onClick={() => routing.backward(navigate)}
                 className={`${style.backButton}  cursor-pointer rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 right-1`}>
                <ArrowLeftIcon className={"w-5 h-5"}/>
            </div>
            <div className={"font-bold text-2xl ml-10 text-gray-200"}>
                Post
            </div>
        </div>
    );
};

export default PostDetailTop;