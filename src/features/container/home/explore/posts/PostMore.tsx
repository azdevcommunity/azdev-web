import MoreButton from "../../../../components/morebutton/MoreButton.tsx";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {FC} from "react";


const PostMore:FC  = ( ) => {
    return (
        <div className={"absolute top-0 right-0"}>
            <Dropdown  placement="bottom-end">
                <DropdownTrigger>
                    <button aria-label="more">
                        <MoreButton className={" p-2"}/>
                    </button>
                </DropdownTrigger>
                <DropdownMenu variant="flat" aria-label="Dropdown menu with shortcut">
                    <DropdownItem>
                        Follow @crazyclips_
                    </DropdownItem>
                    <DropdownItem>
                        Not interested in this post
                    </DropdownItem>
                    <DropdownItem>
                        Block @crazyclips_
                    </DropdownItem>
                    <DropdownItem className="text-danger" color="danger">
                        Report post
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default PostMore;