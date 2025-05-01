import React from 'react';
import HeaderNav from "@/components/dash/shared/headerNav/headerNav";
import {useTranslations} from "next-intl";
import Link from "next/link";


function Header() {
    const t = useTranslations("dashboardPage")
    return (
        <>
            <div className={"flex items-center justify-between py-2 px-9 w-full max-sm:px-4"}>
                <div className={"flex items-center gap-4"}>
                    <h1 className={"text-2xl font-bold max-sm:text-xl text-black"}>{t("title")}</h1>
                    <Link href={"/"}  className={"px-2 py-1 rounded-md shadow shadow-black bg-darkChocolate text-white text-xs"}>
                        {t("homepage")}
                    </Link>
                </div>
                <HeaderNav/>
            </div>
        </>
    );
}

export default Header;