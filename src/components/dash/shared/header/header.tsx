import React from 'react';
import HeaderNav from "@/components/dash/shared/headerNav/headerNav";




function Header() {
    return (
        <>
            <div className={"flex items-center justify-between py-2 px-9 w-full max-sm:px-4"}>
                <div>
                    <h1 className={"text-2xl font-bold max-sm:text-xl"}>داشبورد</h1>
                </div>
                <HeaderNav/>
            </div>
        </>
    );
}

export default Header;