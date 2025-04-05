import React, {ReactNode} from 'react';
import Aside from "@/components/dash/shared/aside/aside";
import Header from "@/components/dash/shared/header/header";

function DashLayout({children}: { children: ReactNode }) {
    return (
        <div className={"bg-white w-full h-screen grid grid-cols-12 grid-rows-12"}>
            <aside className={"col-span-2 row-span-full bg-primary py-5"}>
                <Aside/>
            </aside>
            <header className={"col-span-10 bg-secondary row-span-1 flex items-center"}>
                <Header/>
            </header>
            <main className={"col-span-10  row-span-11"}>
                {children}
            </main>
        </div>
    );
}

export default DashLayout;