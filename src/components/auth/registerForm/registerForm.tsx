"use client"
import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {register as signUp} from "@/services/users"
import {setCookie} from "cookies-next";
import {redirect} from "next/navigation";
import {BeatLoader} from "react-spinners";
import Link from "next/link";


type Inputs = {
    name: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    password: string,
    rePassword: string,
    address: string,
}

const PhonePattern = /(?:(?:(?:\\+?|00)(98))|(0))?((?:90|91|92|93|99)[0-9]{8})$/;
const EmailPattern = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g
const PasswordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/


function RegisterForm() {
    const {register, formState: {errors}, handleSubmit, getValues} = useForm<Inputs>();
    const [isLoading, setIsLoading] = useState(false);
    const handleRegister: SubmitHandler<Inputs> = (data) => {
        const {name, lastName, email, password, phoneNumber, address} = data;
        const role = "user";
        setIsLoading(true);
        signUp({name, lastName, phoneNumber, email, password, role, address}).then((res) => {
            setCookie("accessToken", res.accessToken);
            redirect("/");
        }).finally(() => setIsLoading(false));

    }
    return (
        <form className={`grid grid-cols-2 gap-y-3 gap-x-7 w-full max-md:grid-cols-1 `} onSubmit={handleSubmit(handleRegister)}>
            <div className={"flex flex-col gap-2"}>
                <div className={"rounded-md border border-secondary "}>
                    <input type={"text"}
                           {...register("name", {
                               required: "لطفا نام خود را وارد کنید.."
                           })}
                           className={"w-full h-full px-5 py-2 text-white placeholder:text-white/60 outline-none font-light"}
                           placeholder={"نام خود را وارد کنید"}
                    />
                </div>
                <div className={"min-h-5"}>
                    {errors.name && <p className={"text-sm text-red-600 font-light"}>{errors.name.message}</p>}
                </div>

            </div>
            <div className={"flex flex-col gap-2"}>
                <div className={"rounded-md border border-secondary "}>
                    <input type={"text"}
                           {...register("lastName", {
                               required: "لطفا نام خانوادگی خود را وارد کنید.."
                           })}
                           className={"w-full h-full px-5 py-2 text-white placeholder:text-white/60 outline-none font-light"}
                           placeholder={"نام خانوادگی خود را وارد کنید"}
                    />
                </div>
                <div className={"min-h-5"}>
                    {errors.lastName && <p className={"text-sm text-red-600 font-light"}>{errors.lastName.message}</p>}
                </div>

            </div>
            <div className={"flex flex-col gap-2"}>
                <div className={"rounded-md border border-secondary "}>
                    <input type={"text"}
                           {...register("phoneNumber", {
                               required: "لطفن تلفن خود را وارد کنید..",
                               pattern: {
                                   value: PhonePattern,
                                   message: "فرمت صحیح شماره موبایل وارد کنید"
                               }
                           })}
                           className={"w-full h-full px-5 py-2 text-white placeholder:text-white/60 outline-none font-light"}
                           placeholder={"شماره تلفن خود ر ا وارد کنید"}
                    />
                </div>
                <div className={"min-h-5"}>
                    {errors.phoneNumber &&
                        <p className={"text-sm text-red-600 font-light"}>{errors.phoneNumber.message}</p>}
                </div>

            </div>
            <div className={"flex flex-col gap-2"}>
                <div className={"rounded-md border border-secondary "}>
                    <input type={"text"}
                           {...register("email", {
                               required: "لطفا ایمیل خود را وارد کنید..",
                               pattern: {
                                   value: EmailPattern,
                                   message: "فرمت ایمیل وارد شده ناردست است"
                               }
                           })}
                           className={"w-full h-full px-5 py-2 text-white placeholder:text-white/60 outline-none font-light"}
                           placeholder={"ایمیل خود را وارد کنید"}
                    />
                </div>
                <div className={"min-h-5"}>
                    {errors.email && <p className={"text-sm text-red-600 font-light"}>{errors.email.message}</p>}
                </div>

            </div>
            <div className={"flex flex-col gap-2  md:col-start-1 md:col-end-3"}>
                <div className={"rounded-md border border-secondary "}>
                    <textarea draggable={false} rows={5}
                              {...register("address", {
                                  required: "لطفا آدرس  خود را وارد کنید..",
                              })}
                              className={"w-full h-full px-5 py-2 text-white placeholder:text-white/60 outline-none font-light"}
                              placeholder={"آدرس  خود را وارد کنید"}
                    ></textarea>
                </div>
                <div className={"min-h-5"}>
                    {errors.address && <p className={"text-sm text-red-600 font-light"}>{errors.address.message}</p>}
                </div>

            </div>
            <div className={"flex flex-col gap-2"}>
                <div className={"rounded-md border border-secondary "}>
                    <input type={"text"}
                           {...register("password", {
                               required: "رمز عبور خود را وارد کنید..",
                               pattern: {
                                   value: PasswordPattern,
                                   message: "رمز عبور حداقل 8 کاراکتر حداقل یک حرف کوچک یک حرف بزرگ و یک عدد باشد"
                               },
                               validate: (data) => {
                                   if (getValues("rePassword") && data !== getValues("rePassword")) {
                                       return "رمز عبور و تکرار ان یکی نیست"
                                   }
                               },
                               // onChange: () => trigger("rePassword")
                           })}
                           className={"w-full h-full px-5 py-2 text-white placeholder:text-white/60 outline-none font-light"}
                           placeholder={"رمز عبور خود را وارد کنید"}
                    />
                </div>
                <div className={"min-h-5"}>
                    {errors.password && <p className={"text-sm text-red-600 font-light"}>{errors.password.message}</p>}
                </div>

            </div>
            <div className={"flex flex-col gap-2"}>
                <div className={"rounded-md border border-secondary "}>
                    <input type={"text"}
                           {...register("rePassword", {
                               required: "تکرار رمز عبور الزامی است",
                               pattern: {
                                   value: PasswordPattern,
                                   message: "رمز عبور حداقل 8 کاراکتر حداقل یک حرف کوچک یک حرف بزرگ و یک عدد باشد"
                               },

                               validate: (data) => {
                                   console.log(getValues("password") && data !== getValues("password"));
                                   if (getValues("password") && data !== getValues("password")) {
                                       return "رمز عبور و تکرار ان یکی نیست"
                                   }
                               },
                               // onChange: () => trigger("password")
                           })}
                           className={"w-full h-full px-5 py-2 text-white placeholder:text-white/60 outline-none font-light"}
                           placeholder={"رمز عبور خود را تکرار کنید"}
                    />
                </div>
                <div className={"min-h-5"}>
                    {errors.rePassword &&
                        <p className={"text-sm text-red-600 font-light"}>{errors.rePassword.message}</p>}
                </div>

            </div>
            <div className={"flex items-center  gap-4 md:col-start-2 md:col-end-3 justify-self-end flex-col"}>
                <p className={"font-semibold text-sm text-white/70 "}>
                    <span>قبلا ثبت نام کردید ؟</span>
                    <Link href={"/login"} className={"mx-2 font-bold text-white"}>
                        صفحه ورود
                    </Link>
                </p>
                <div className={"flex items-center gap-3"}>
                    <button className={"px-7 py-2 rounded-md  bg-secondary shadow shadow-black cursor-pointer"}>بازگشت
                    </button>
                    <button disabled={isLoading}
                            className={"px-7 py-2 rounded-md text-white bg-darkerGold shadow shadow-black cursor-pointer"}>{
                        isLoading ? <BeatLoader size={12} color={"black"}/> : "ثبت نام"
                    }
                    </button>
                </div>
            </div>
        </form>
    );
}

export default RegisterForm;