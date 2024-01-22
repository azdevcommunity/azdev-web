import TrendsAndSearch from "../../container/home/trendsandsearch/TrendsAndSearch.tsx";
import PostDetail from "../../container/postDetail/PostDetail.tsx";
import PostDetailTop from "../../container/postDetail/PostDetailTop.tsx";

const PostDetailPage = () => {
    return (
        <>
            <div className={"mainBorder"}>
                <PostDetailTop/>
                <PostDetail imageSource={"https://flowbite.com/docs/videos/flowbite.mp4"}/>
                <PostDetail imageSource={"https://flowbite.com/docs/videos/flowbite.mp4"}/>
                <PostDetail imageSource={"https://flowbite.com/docs/videos/flowbite.mp4"}/>
            </div>
            <TrendsAndSearch/>
        </>
    );
};

export default PostDetailPage;