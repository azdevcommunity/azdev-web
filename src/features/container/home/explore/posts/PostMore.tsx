import MoreButton from "../../../../components/morebutton/MoreButton.tsx";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";

const PostMore = () => {
    return (
        <div className={"absolute top-0 right-0"}>
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <button aria-label="more">
                        <MoreButton className={" p-2"}/>
                    </button>
                </DropdownTrigger>
                <DropdownMenu variant="flat" aria-label="Dropdown menu with shortcut">
                    <DropdownItem key="new" shortcut="⌘N">New file</DropdownItem>
                    <DropdownItem key="copy" shortcut="⌘C">Copy link</DropdownItem>
                    <DropdownItem key="edit" shortcut="⌘⇧E">Edit file</DropdownItem>
                    <DropdownItem key="delete" shortcut="⌘⇧D" className="text-danger" color="danger">
                        Delete file
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>

    );
};

export default PostMore;