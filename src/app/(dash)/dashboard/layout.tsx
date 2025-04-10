import React, {ReactNode} from 'react';
import Aside from "@/components/dash/shared/aside/aside";
import Header from "@/components/dash/shared/header/header";
import {Metadata} from "next";
import MobileNav from "@/components/dash/shared/mobileNav/mobileNav";

export const metadata: Metadata = {
    title: "پنل ادمین ویوا",
}

function DashLayout({children}: { children: ReactNode }) {
    return (
            <div
                className={"bg-white w-full h-screen min-lg:min-h-screen overflow-hidden grid grid-cols-12  grid-rows-12"}>
                <aside className={"col-span-2 row-span-full bg-primary py-5 max-xl:col-span-3 max-md:hidden"}>
                    <Aside/>
                </aside>
                <header
                    className={"col-span-10 bg-secondary row-span-1 flex items-center max-xl:col-span-9 max-md:col-span-full"}>
                    <Header/>
                </header>
                <main className={"col-span-10  row-span-11 max-xl:col-span-9 max-md:col-span-full"}>
                    {children}
                </main>
                <MobileNav/>
            </div>

            );
            }

            export default DashLayout;