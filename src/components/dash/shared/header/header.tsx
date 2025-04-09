import React from 'react';
import HeaderNav from "@/components/dash/shared/headerNav/headerNav";




function Header() {
    return (
        <>
            <div className={"flex items-center justify-between py-2 px-9 w-full"}>
                <div>
                    <h1 className={"text-2xl font-bold"}>داشبورد</h1>
                </div>
                <HeaderNav/>
            </div>
        </>
    );
}

export default Header;