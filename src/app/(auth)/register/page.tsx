import React from 'react';
import RegisterForm from "@/components/auth/registerForm/registerForm";
import {useTranslations} from "next-intl";

export const metadata = {
    title: "ویوا عطر | ثبت نام"
}

function RegisterPage() {
    const t = useTranslations("register");
    return (
        <div
            className={"rounded-lg flex items-center flex-col gap-7 p-10 bg-primary/80 backdrop-blur-lg shadow-lg shadow-black  lg:w-2/3 max-md:w-3/4  max-sm:w-full max-md:p-5 2xl:w-1/2"}>
            <h1 className={"text-3xl font-bold text-darkerGold"}>{t("title")}</h1>
            <RegisterForm/>
        </div>
    );
}

export default RegisterPage;