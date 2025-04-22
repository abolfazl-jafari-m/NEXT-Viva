"use client"
import React, {FormEvent} from 'react';
import {FaCircleUser} from "react-icons/fa6";
import {Comment} from "@/interfaces/interfaces";
import {getCookie} from "cookies-next/client";
import toast from "react-hot-toast";

function Comments({comments}: { comments: Comment[] }) {
    const token = getCookie("accessToken");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!token) {
            toast("برای ثبت نظر باید وارد شوید", {
                position :"top-right",
                style: {backgroundColor : "#fff", color :"#000"},
                icon: "😃"
            })
        }
    }
    return (
        <section className={"w-full min-h-screen p-20"} id={"comments"}>
            <h3 className={"text-white font-semibold text-5xl mb-10"}>نظرات</h3>
            <div className={"flex flex-col gap-10"}>
                <form className={"flex flex-col gap-4"} onSubmit={handleSubmit}>
                    <p className={"text-darkerGold text-xl"}>نظر خود را اضافه کنید</p>
                    <input type={"text"}
                           className={"text-white font-extralight shadow shadow-black outline-none rounded-md py-2 px-8 border border-white w-full placeholder:text-white/40"}
                           placeholder={"اینجا بنویسید"}/>
                    <button className={"bg-secondary self-end px-8 py-2 rounded-md shadow shadow-black cursor-pointer"} >ثبت نظر
                    </button>
                </form>
                <div className={"flex flex-col gap-10 px-10"}>
                    {
                        comments.length === 0 ?
                            <div className={"flex items-center justify-center mt-10"}>
                                <p className={"font-semibold text-2xl text-white"}>اولین نفر باشین که تجربه خود را به
                                    اشتراک میزارید</p>
                            </div>
                            :
                            <>
                                <div className={"flex items-center gap-5"}>
                                    <FaCircleUser size={40} color={"white"}/>
                                    <div className={"flex flex-col gap-2"}>
                                        <h4 className={"text-gold text-sm"}>محمد</h4>
                                        <p className={"text-white"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                            صنعت
                                            چاپ و با استفاده از طراحان گرافیک است</p>
                                    </div>
                                </div>
                                <div className={"flex items-center gap-5"}>
                                    <FaCircleUser size={40} color={"white"}/>
                                    <div className={"flex flex-col gap-2"}>
                                        <h4 className={"text-gold text-sm"}>علیرضا</h4>
                                        <p className={"text-white"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                            صنعت
                                            چاپ و با استفاده از طراحان گولید سادگی نامفهوم از صنعت
                                            چاپ و با استفاده از طراحان گرافیک است</p>
                                    </div>
                                </div>
                                <div className={"flex items-center gap-5"}>
                                    <FaCircleUser size={40} color={"white"}/>
                                    <div className={"flex flex-col gap-2"}>
                                        <h4 className={"text-gold text-sm"}>ابوالفضل</h4>
                                        <p className={"text-white"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                            صنعت
                                            چاپ و با استفاده از طراحان گرافیک است</p>
                                    </div>
                                </div>
                                <div className={"flex items-center gap-5"}>
                                    <FaCircleUser size={40} color={"white"}/>
                                    <div className={"flex flex-col gap-2"}>
                                        <h4 className={"text-gold text-sm"}>رضا</h4>
                                        <p className={"text-white"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                            صنعتلورم ایپسوم
                                            متن ساختگی با تولید سادگی نامفهوم از صنعت
                                            چاپ و با استفاده از طراحان گرافیک است</p>
                                    </div>
                                </div>
                            </>
                    }


                </div>
            </div>
        </section>
    );
}

export default Comments;