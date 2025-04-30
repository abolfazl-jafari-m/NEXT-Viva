"use client";
import React from 'react';
import {FaMoon, FaSun} from "react-icons/fa6";
import {useTheme} from "next-themes";

function ThemeButton() {
    const {theme, setTheme} = useTheme();

    return (
        <button type={"button"} className={"text-gold max-sm:text-white text-2xl max-sm:text-xl light:max-md:text-black  rounded-full p-2 cursor-pointer"}
                onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}>
            {
                theme !== "dark" ? <FaMoon /> : <FaSun />
            }
        </button>
    );
}

export default ThemeButton;