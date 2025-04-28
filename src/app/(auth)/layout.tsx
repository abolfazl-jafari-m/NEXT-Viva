import React, {ReactNode} from 'react';
import {FaHome} from "react-icons/fa";
import Link from "next/link";

function AuthLayout({children}: { children: ReactNode }) {
    return (
        <main
            className={"flex items-center justify-center w-full min-h-screen max-md:p-5 bg-[url('/images/background-auth.jpeg')] bg-cover bg-no-repeat bg-center"}>
            <div className={"fixed top-10 left-10 text-3xl text-gold cursor-pointer"}>
                <Link href={"/"}>
                    <FaHome/>
                </Link>
            </div>
            {children}
        </main>
    );
}

export default AuthLayout;