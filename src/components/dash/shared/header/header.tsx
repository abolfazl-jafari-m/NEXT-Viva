import React from 'react';
import HeaderNav from "@/components/dash/shared/headerNav/headerNav";
import {useTranslations} from "next-intl";


function Header() {
    const t = useTranslations("dashboardPage")
    return (
        <>
            <div className={"flex items-center justify-between py-2 px-9 w-full max-sm:px-4"}>
                <div>
                    <h1 className={"text-2xl font-bold max-sm:text-xl text-black"}>{t("title")}</h1>
                </div>
                <HeaderNav/>
            </div>
        </>
    );
}

export default Header;