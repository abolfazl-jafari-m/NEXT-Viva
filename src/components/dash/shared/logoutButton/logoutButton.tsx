"use client";
import React from 'react';
import {CiLogout} from "react-icons/ci";
import {deleteCookie} from "cookies-next/client";
import {redirect} from "next/navigation";
import {useTranslations} from "next-intl";
import toast from "react-hot-toast";

function LogoutButton() {
    const t = useTranslations("dashboardPage");
    return (
        <button onClick={() => {
            deleteCookie("accessToken");
            toast.success(t("logoutMessage"));
            redirect("/login");
        }}
                className={"bg-darkChocolate w-full rounded-lg text-white text-center max-sm:p-0 max-md:px-1.5 md:px-6 md:py-2 cursor-pointer flex items-center gap-2 max-lg:gap-2 max-lg:px-3 max-lg:text-sm"}>
                      <span className={"max-md:hidden"}>
                             {t("logout")}
                        </span>
            <CiLogout/>
        </button>
    );
}

export default LogoutButton;