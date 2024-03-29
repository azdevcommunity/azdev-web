import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";

import style from '../trendsandsearch.module.css';
import MoreButton from "../../../../components/morebutton/MoreButton.tsx";
const TrendItemMore = () => {
    return (
        <div className={style.trendItemMore}>
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <button aria-label="more" >
                        <MoreButton className={"p-2 hover:text-white hover:bg-white hover:bg-opacity-20 "}/>

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

export default TrendItemMore;