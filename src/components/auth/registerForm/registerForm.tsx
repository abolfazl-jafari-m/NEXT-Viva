"use client"
import React, {useState} from 'react';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {register as signUp} from "@/services/users"
import {setCookie} from "cookies-next/client";
import {redirect} from "next/navigation";
import {BeatLoader} from "react-spinners";
import Link from "next/link";
import {useTranslations} from "next-intl";
import Input from "@/components/auth/base/input/input";
import TextArea from "@/components/auth/base/textArea/textArea";
import PasswordInput from "@/components/auth/base/passwordInput/passwordInput";
import toast from "react-hot-toast";
import {EmailPattern, PasswordPattern, PhonePattern} from "@/constants/regex";


type Inputs = {
    name: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    password: string,
    rePassword: string,
    address: string,
}



function RegisterForm() {
    const t = useTranslations("register");
    const {control, formState: {errors}, handleSubmit, getValues} = useForm<Inputs>({
        defaultValues: {
            email: "",
            name: "",
            lastName: "",
            password: "",
            rePassword: "",
            address: "",
            phoneNumber: ""
        }
    });
    const [isLoading, setIsLoading] = useState(false);
    const handleRegister: SubmitHandler<Inputs> = (data) => {
        const {name, lastName, email, password, phoneNumber, address} = data;
        const role = "user";
        setIsLoading(true);
        signUp({name, lastName, phoneNumber, email, password, role, address}).then((res) => {
            if (res) {
                toast.success(t("successRegister"))
                setCookie("accessToken", res.accessToken);
                setTimeout(() => redirect("/"), 500);
            }
        }).finally(() => setIsLoading(false));

    }
    return (
        <form className={`grid grid-cols-2 gap-y-3 gap-x-7 w-full max-md:grid-cols-1 `}
              onSubmit={handleSubmit(handleRegister)}>
            <Controller
                render={({field}) =>
                    <Input placeholder={t("namePlaceholder")}
                           error={errors.name?.message} {...field}/>}
                name={"name"}
                control={control}
                rules={{required: t("nameError")}}
            />
            <Controller
                render={({field}) =>
                    <Input placeholder={t("lastNamePlaceholder")}
                           error={errors.lastName?.message} {...field}/>}
                name={"lastName"}
                control={control}
                rules={{required: t("lastNameError")}}
            />
            <Controller
                render={({field}) =>
                    <Input placeholder={t("phonePlaceholder")}
                           error={errors.phoneNumber?.message} {...field}/>}
                name={"phoneNumber"}
                control={control}
                rules={{
                    required: t("phoneError"),
                    pattern: {
                        value: PhonePattern,
                        message: t("phoneErrorRegex")
                    }
                }}
            />
            <Controller
                render={({field}) =>
                    <Input placeholder={t("emailPlaceholder")}
                           error={errors.email?.message} {...field}/>}
                name={"email"}
                control={control}
                rules={{
                    required: t("emailError"),
                    pattern: {
                        value: EmailPattern,
                        message: t("emailErrorRegex")
                    }
                }}
            />
            <Controller
                render={({field}) =>
                    <TextArea containerClassName={"flex flex-col gap-2  md:col-start-1 md:col-end-3"}
                              placeholder={t("addressPlaceholder")}
                              error={errors.address?.message} {...field}/>}
                name={"address"}
                control={control}
                rules={{required: t("addressError")}}
            />
            <Controller render={({field}) =>
                <PasswordInput placeholder={t("passwordPlaceholder")} error={errors.password?.message} {...field}/>}
                        name={"password"}
                        control={control}
                        rules={{
                            required: t("passwordError"),
                            pattern: {
                                value: PasswordPattern,
                                message: t("passwordErrorRegex")
                            },
                            validate: (data) => {
                                if (getValues("rePassword") && data !== getValues("rePassword")) {
                                    return t("confirmPassError")
                                }
                            },
                            // onChange: () => trigger("rePassword")
                        }}/>
            <Controller render={({field}) =>
                <PasswordInput placeholder={t("rePasswordPlaceholder")} error={errors.rePassword?.message} {...field}/>}
                        name={"rePassword"}
                        control={control}
                        rules={{
                            required: t("rePasswordError"),
                            pattern: {
                                value: PasswordPattern,
                                message: t("passwordErrorRegex")
                            },
                            validate: (data) => {
                                if (getValues("password") && data !== getValues("password")) {
                                    return t("confirmPassError")
                                }
                            },
                            // onChange: () => trigger("rePassword")
                        }}/>
            <div className={"flex items-center  gap-4 md:col-start-2 md:col-end-3 justify-self-end flex-col"}>
                <p className={"font-semibold text-sm text-white/70 "}>
                    <span>{t("alreadySignUp")}</span>
                    <Link href={"/login"} className={"mx-2 font-bold text-white"}>
                        {t("login")}
                    </Link>
                </p>
                <div className={"flex items-center gap-3"}>
                    {
                        isLoading ?
                            (
                                <div className={"flex items-center justify-center"}><BeatLoader size={12}
                                                                                                color={"gold"}/>
                                </div>)
                            :
                            (<>
                                <button
                                    className={"px-7 py-2 rounded-md  bg-secondary shadow shadow-black cursor-pointer"}>{t("back")}
                                </button>
                                <button disabled={isLoading}
                                        className={"px-7 py-2 rounded-md text-white bg-darkerGold shadow shadow-black cursor-pointer"}>{t("singUp")}
                                </button>
                            </>)
                    }
                </div>
            </div>
        </form>
    );
}

export default RegisterForm;