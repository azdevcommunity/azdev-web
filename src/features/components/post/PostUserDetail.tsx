import {FC} from "react";

interface Props {
    onClick?: () => void
}

const PostUserDetail:FC<Props> = ({onClick}) => {
    return (
        <div onClick={onClick} className="flex items-center space-x-2">
            <div>
                <span className="font-bold">DogeDesigner</span>
                <span className="text-gray-400">@cb_doge · 14h</span>
            </div>
        </div>
    );
};

export default PostUserDetail;