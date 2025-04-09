"use client";
import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import {useRouter} from "next/navigation";

interface IPops extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

function BackBtn({children, ...res}: IPops) {
    const router = useRouter();
    return (
        <button onClick={() => router.back()}{...res} >
            {children}
        </button>
    );
}

export default BackBtn;