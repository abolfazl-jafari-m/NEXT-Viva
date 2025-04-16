"use client"
import React, {useState} from 'react';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {getUser, login} from "@/services/users";
import {redirect} from "next/navigation";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {setCookie} from "cookies-next";
import {UserInterface} from "@/interfaces/interfaces";
import {BeatLoader} from "react-spinners";
import Input from "@/components/auth/base/input/input";
import PasswordInput from "@/components/auth/base/passwordInput/passwordInput";
import toast from "react-hot-toast";


type Inputs = {
    email: string,
    password: string
}


function LoginForm() {
    const {formState: {errors}, handleSubmit, control} = useForm<Inputs>({
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const t = useTranslations("login");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleLogin: SubmitHandler<Inputs> = async (data) => {
        setIsLoading(true);
        const response = await login(data.email, data.password);
        if (response) {
            const accessToken = response.accessToken;
            setCookie("accessToken", accessToken);
            const user: UserInterface = await getUser(accessToken);
            setIsLoading(false);
            toast.success(t("successLogin"));
            if (user.role === "admin") {
                redirect("/dashboard");
            } else {
                redirect("/");
            }
        }
        setIsLoading(false);
    }

    return (
        <form className={"flex flex-col w-full gap-8"} onSubmit={handleSubmit(handleLogin)}>
            <Controller
                render={({field}) =>
                    <Input placeholder={t("emailPlaceholder")}
                           error={errors.email?.message} {...field}/>}
                name={"email"}
                control={control}
                rules={{required: t("emailRequired")}}
            />
            <Controller render={({field}) =>
                <PasswordInput placeholder={t("passPlaceholder")} error={errors.password?.message} {...field}/>}
                        name={"password"}
                        control={control}
                        rules={{required: t("passRequired")}}/>

            <p className={"text-sm text-white/70 font-semibold text-center"}>{t("notMember")}
                <Link href={"/register"} className={"cursor-pointer text-white mx-2"}>
                    {t("register")}
                </Link>
            </p>

            {!isLoading ? (
                <button
                    className={"font-light py-2 px-8 self-center cursor-pointer rounded-lg bg-darkerGold text-white/80"}
                >{t("login")}
                </button>
            ) : (
                <div className={"flex items-center justify-center"}>
                    <BeatLoader size={14} color={"gold"}/>
                </div>
            )}

        </form>
    )
        ;
}

export default LoginForm;