"use client";
import React, {useEffect} from 'react';
import {FaMoon, FaSun} from "react-icons/fa6";
import {useTheme} from "next-themes";

function ThemeButton() {
    const {theme, setTheme} = useTheme();

    return (
        <button className={"text-darkerGold  rounded-full p-2 cursor-pointer"}
                onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}>
            {
                theme !== "dark" ? <FaMoon size={24}/> : <FaSun size={24}/>
            }
        </button>
    );
}

export default ThemeButton;