"use client"
import React, { useState} from 'react';
import {FaRegEye} from "react-icons/fa";
import {FaRegEyeSlash} from "react-icons/fa";
import {SubmitHandler, useForm} from "react-hook-form";
import {getUser, login} from "@/services/users";
import {useLocalStorage} from "@/hooks/useLocalStorage";
import {redirect} from "next/navigation";
import Link from "next/link";



type Inputs = {
    email: string,
    password: string
}


function LoginForm() {
    const [showPass, setShowPass] = useState<boolean>(false);
    const {register, formState: {errors}, handleSubmit} = useForm<Inputs>()
    const [_, setToken] = useLocalStorage("token");

    const handleLogin: SubmitHandler<Inputs> = (data) => {
        login(data.email, data.password)
            .then((res) => {
                setToken(res.accessToken);
                return res.accessToken;
            }).then(res => getUser(res))
            .then(res => {
                if (res.role === "admin") {
                    redirect("/dashboard");
                } else if (res.role === "user") {
                    redirect("/")
                }
            })
        ;
    }

    return (
        <form className={"flex flex-col w-full gap-8"} onSubmit={handleSubmit(handleLogin)}>
            <div className={"flex flex-col gap-2"}>
                <div className={" rounded-md border border-white"}>
                    <input type={"text"}
                           className={"w-full h-full px-6 py-3 text-white placeholder:text-white/60 outline-none font-light"}
                           placeholder={"نام کاربری خود را وارد کنید"}
                           {...register("email", {
                               required: "لطفن ایمیل خود را وارد کنید",
                           })}
                    />
                </div>
                {errors.email && <p className={"text-sm text-red-600 font-light"}>{errors.email.message}</p>}
            </div>
            <div className={"flex flex-col gap-2"}>
                <div className={" rounded-md border border-white flex gap-2 items-center "}>
                    <input type={showPass ? "text" : "password"}
                           {...register("password", {required: "لطفن پسورد خود را وارد کنید"})}
                           className={"w-full h-full text-white placeholder:text-white/60 outline-none font-light  px-6 py-3"}
                           placeholder={"رمز عبور خود را وارد کنید"}/>
                    <div onClick={() => setShowPass(!showPass)} className={"cursor-pointer pl-3"}>
                        {showPass ?
                            <FaRegEye color={"white"} size={16}/>
                            :
                            <FaRegEyeSlash color={"white"} size={16}/>
                        }
                    </div>
                </div>
                {errors.password && <p className={"text-sm text-red-600"}>{errors.password.message}</p>}
            </div>
            <Link href={"/register"} className={"cursor-pointer"}>
                <p className={"text-sm text-white/70 font-semibold text-center"}>هنوز ثبت نام نکرده اید ؟</p>
            </Link>
            <button
                className={"font-light py-2 px-8 self-center cursor-pointer rounded-lg bg-darkerGold text-white/80"}
            >ورود
            </button>
        </form>
    )
        ;
}

export default LoginForm;