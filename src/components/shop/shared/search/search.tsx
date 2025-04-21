"use client";
import React, {useState} from 'react';
import {CgClose, CgSearch} from "react-icons/cg";

function Search() {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    return (
        <div>
            <CgSearch size={24} onClick={() => setIsOpen(true)} className={"cursor-pointer"}/>
            {
                isOpen && (
                    <>
                        <div
                            className={"bg-primary/80 fixed top-0 left-0 w-full h-screen backdrop-blur-2xl flex items-center justify-center flex-col"}>
                            <span className={"absolute top-10 left-10 rounded-full bg-darkerGold text-white p-1 cursor-pointer"} onClick={() => setIsOpen(false)}>
                                <CgClose/>
                            </span>
                            <div className={"bg-secondary rounded-lg ring ring-gold px-3 py-2 w-1/3"}>
                                <input className={"w-full outline-none border-none bg-transparent text-black"}
                                       value={search} onChange={(e) => setSearch(e.target.value)}
                                       placeholder={"جستجو کنید...."}/>
                            </div>
                            <div></div>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default Search;