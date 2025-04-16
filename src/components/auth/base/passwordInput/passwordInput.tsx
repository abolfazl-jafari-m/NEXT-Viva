"use client"
import React, {InputHTMLAttributes, useState} from 'react';
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    error?: string
}

function PasswordInput({placeholder, error, ...res}: IProps) {
    const [showPass, setShowPass] = useState<boolean>(false);
    return (
        <div className={"flex flex-col gap-2"}>
            <div
                className={`rounded-md border ${!error ? "border-secondary" : "border-red-400"} flex items-center gap-2 `}>
                <input type={showPass ? "text" : "password"} {...res}
                       className={"w-full h-full text-white placeholder:text-white/60 outline-none font-light  px-6 py-3"}
                       placeholder={placeholder}/>
                <div onClick={() => setShowPass(!showPass)} className={"cursor-pointer pl-3"}>
                    {showPass ?
                        <FaRegEye color={"white"} size={16}/>
                        :
                        <FaRegEyeSlash color={"white"} size={16}/>
                    }
                </div>
            </div>
            <div className={"min-h-5"}>
                {error && <p className={"text-sm text-red-400 font-light"}>{error}</p>}
            </div>
        </div>
    );
}

export default PasswordInput;