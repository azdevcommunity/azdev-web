import Post from "./Post.tsx";

const PostInfinityScroll = () => {
    return (
        <div>
            <Post/>
            <Post isImage={1}/>
            <Post/>
            <Post/>
            <Post isImage={2} />
            <Post/>
            <Post isImage={1} />
            <Post/>
        </div>
    );
};

export default PostInfinityScroll;