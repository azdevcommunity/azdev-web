import {Input} from "@nextui-org/react";
import {useState} from "react";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    return (
        <div
            className="sticky mt-2 top-0  w-full overflow-hidden  rounded-2xl mb-3 flex justify-center items-center  text-white shadow-lg">

            <Input
                size={"sm"}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                isClearable
                placeholder="Enter your email"
                defaultValue="junior@nextui.org"
                onClear={() => setSearch("")}
                className="w-full  rounded-2xl "
                startContent={
                    <SearchIcon/>
                }
            />
        </div>
    );
};

export default SearchBar;


const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
         className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
    </svg>

);
