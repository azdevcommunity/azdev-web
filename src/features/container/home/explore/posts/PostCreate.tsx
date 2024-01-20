import {useState} from "react";
import {Button, Textarea} from "@nextui-org/react";
import MoreIcon from "../../../../components/icons/MoreIcon.tsx";
import SettingsIcon from "../../../../components/icons/SettingsIcon.tsx";
import SmileIcon from "../../../../components/icons/SmileIcon.tsx";
import GifIcon from "../../../../components/icons/GifIcon.tsx";
import style from  './post.module.css'

const PostCreate = () => {
    const [postContent, setPostContent] = useState('');

    const handlePostChange = (event) => {
        setPostContent(event.target.value);
    };

    const handleSubmit = () => {
        console.log(postContent);
        setPostContent('');
    };
    return (
        <div className={`${style.postCreate} p-4 rounded-lg shadow-md`}>
            <div className={"p-4"}>
                <Textarea
                    value={postContent}
                    onChange={handlePostChange}
                    variant={"underlined"}
                    placeholder="What is happening?!"
                    className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                />
            </div>
            <div className="flex px-4 items-center justify-between">
                <div>
                    <Button variant="light" className={"rounded-full"} isIconOnly>
                        <MoreIcon/>
                    </Button>
                    <Button variant="light" className={"rounded-full"} isIconOnly>
                        <GifIcon/>
                    </Button>
                    <Button variant="light" className={"rounded-full"} isIconOnly>
                        <SettingsIcon/>
                    </Button>
                    <Button variant="light" className={"rounded-full"} isIconOnly>
                        <SmileIcon/>
                    </Button>
                </div>
                <Button size={"sm"} onClick={handleSubmit} color="primary">
                    Post
                </Button>
            </div>
        </div>
    );
};

export default PostCreate;