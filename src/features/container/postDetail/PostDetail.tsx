import PostUserDetail from "../../components/post/PostUserDetail.tsx";
import style from './postDetail.module.css';
import PostAvatar from "../../components/post/PostAvatar.tsx";
import MoreButton from "../../components/morebutton/MoreButton.tsx";
import {ArrowUpIcon, BookmarkIcon, ChatBubbleLeftIcon, HeartIcon, ShareIcon} from "@heroicons/react/24/outline";
import PostSocial from "../../components/post/PostSocial.tsx";


const PostDetail = ({imageSource}: any) => {
    return (
        <div className={"px-3 py-2  postBorder"}>
            <div className={"flex pb-3 min-h-full justify-between items-center"}>
                <div className={"flex items-center"}>
                    <PostAvatar/>
                    <PostUserDetail/>
                </div>
                <div className={"flex  justify-between items-center"}>
                    <button className={`${style.subscribeButton} `}>Subscribe</button>
                    <div className={"mx-1"}>
                        <MoreButton className={"p-2   hover:bg-opacity-1"}/>
                    </div>
                </div>
            </div>
            <div className={"py-2 flex-col  items-center justify-center"}>
                <video className="w-full rounded-lg h-auto max-w-full" controls>
                    <source src={imageSource} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="social-section" style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 10px',
                    fontSize: '12px',
                    color: '#65676b'
                }}>
                    <span>8:39 AM · Jan 21, 2024</span>
                    <span>·</span>
                    <span>20.3M Views</span>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px',
                }}>
                    <PostSocial  >
                        <ChatBubbleLeftIcon className="icon" style={{width: '24px', height: '24px', marginRight: '5px'}}/>
                        <span>1.5k</span>
                    </PostSocial>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <HeartIcon className="icon" style={{width: '24px', height: '24px', marginRight: '5px'}}/>
                        <span>90k</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <ShareIcon className="icon" style={{width: '24px', height: '24px', marginRight: '5px'}}/>
                        <span>9.3k</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <BookmarkIcon className="icon" style={{width: '24px', height: '24px', marginRight: '5px'}}/>
                        <span>6.4k</span>
                    </div>
                    <div>
                        <ArrowUpIcon className="icon" style={{width: '24px', height: '24px'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
