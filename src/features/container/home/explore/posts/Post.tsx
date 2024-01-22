import {HeartIcon, ShareIcon} from "@heroicons/react/outline/";
import {RefreshIcon, ArrowUpIcon} from "@heroicons/react/solid";
import {Avatar, Button, Image} from "@nextui-org/react";
import style from './post.module.css'
import PostMore from "./PostMore.tsx";

const Post = ({isImage}: any) => {
    return (
        <div className={`${style.post} w-full flex mb-4 border-b-1 text-white p-4 `}>
            <div className={"pl-2 pr-4"}>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
            </div>
            <div className={"relative w-full"}>
                <div className="flex items-center space-x-2">
                    <div>
                        <span className="font-bold">DogeDesigner</span>
                        <span className="text-gray-400">@cb_doge · 14h</span>
                    </div>
                </div>
                <p className="mt-2">Comedy is legal on this platform!</p>
                {
                    isImage === 1 &&
                    <div className={"py-2"}>
                        <Image
                            width={"full"}
                            alt="NextUI hero Image"
                            fallbackSrc="https://via.placeholder.com/300x200"
                            src="https://pbs.twimg.com/media/GELJzK7X0AAGo16?format=jpg&name=small"
                        />
                    </div>
                }
                {
                    isImage === 2 &&
                    <div className={"py-2"}>
                        <video className="w-full rounded-md h-auto max-w-full" controls>
                            <source src="https://flowbite.com/docs/videos/flowbite.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                }
                <div className="flex w-full justify-between items-center mt-4 text-gray-400">
                    <div className={"flex justify-center items-center"}>
                        <Button size={"sm"} variant="light" className={"rounded-full "} isIconOnly>
                            <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5"/>
                        </Button>
                        <span>1.8K</span>
                    </div>
                    <div className={"flex justify-center items-center"}>
                        <Button size={"sm"} variant="light" className={"rounded-full"} isIconOnly>
                            <ArrowPathIcon className="w-5 h-5"/>
                        </Button>
                        <span>1.1K</span>

                    </div>
                    <div className={"flex justify-center items-center"}>
                        <Button size={"sm"} color={"danger"} variant="light" className={"rounded-full"} isIconOnly>
                            <HeartIcon className="w-5 h-5"/>
                        </Button>
                        <span>10K</span>

                    </div>
                    <div className={"flex justify-center items-center"}>
                        <Button size={"sm"} variant="light" className={"rounded-full"} isIconOnly>
                            <ShareIcon className="w-5 h-5"/>
                        </Button>
                        <span>3.2M</span>

                    </div>
                </div>
                <PostMore/>
            </div>
        </div>
    );
};

export default Post;