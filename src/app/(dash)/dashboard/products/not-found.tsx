import React from 'react';
import {useTranslations} from "next-intl";

function NotFound() {
    const t = useTranslations("dashProducts");
    return (
        <div className={"flex items-center justify-center w-full h-full gap-2"}>
            <span className={"font-semibold text-4xl"}>404</span>
            <span className={"text-darkChocolate text-xl"}>{t("notFound")}</span>
        </div>
    );
}

export default NotFound;