import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

import style from '../trendsandsearch.module.css';
import MoreIcon from "./MoreIcon.tsx";

const TrendItemMore = () => {
    return (
        <div className={style.trendItemMore}>
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Button variant="light" className={" rounded-full"} aria-label="more" isIconOnly>
                        <MoreIcon/>
                    </Button>
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