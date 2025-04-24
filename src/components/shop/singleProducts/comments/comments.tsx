"use client"
import React, {FormEvent} from 'react';
import {FaCircleUser} from "react-icons/fa6";
import {Comment} from "@/interfaces/interfaces";
import {getCookie} from "cookies-next/client";
import toast from "react-hot-toast";
import {useTranslations} from "next-intl";

function Comments({comments}: { comments: Comment[] }) {
    const token = getCookie("accessToken");
    const t = useTranslations("product-single")
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!token) {
            toast(t("auth-message"), {
                position: "top-right",
                style: {backgroundColor: "#fff", color: "#000"},
                icon: "😃"
            })
        }
    }
    return (
        <section className={"w-full min-h-screen p-20 max-lg:p-15 max-md:p-10 max-sm:p-5"} id={"comments"}>
            <h3 className={"text-white font-semibold text-5xl max-lg:text-3xl max-md:text-xl mb-10"}>{t("comments")}</h3>
            <div className={"flex flex-col gap-10"}>
                <form className={"flex flex-col gap-4"} onSubmit={handleSubmit}>
                    <p className={"text-darkerGold text-xl"}>{t("addYourComment")}</p>
                    <input type={"text"}
                           className={"text-white font-extralight shadow shadow-black outline-none rounded-md py-2 px-8 border border-white w-full placeholder:text-white/40"}
                           placeholder={t("writeHere")}/>
                    <button
                        className={"bg-secondary self-end px-8 py-2 max-md:px-5 max-md:py-1 max-sm:text-sm rounded-md shadow shadow-black cursor-pointer"}>{t("submitComment")}
                    </button>
                </form>
                <div className={"flex flex-col gap-10 px-10 max-md:px-5 max-md:gap-4"}>
                    {
                        comments.length === 0 ?
                            <div className={"flex items-center justify-center mt-10"}>
                                <p className={"font-semibold text-2xl text-white max-md:text-xl max-sm:text-lg max-md:text-center"}>{t("beTheFirstOne")}</p>
                            </div>
                            :
                            <>
                                {comments.map((comment: Comment) => (
                                    <div key={comment.comment} className={"flex items-center gap-5"}>
                                        <FaCircleUser size={40} color={"white"}/>
                                        <div className={"flex flex-col gap-2"}>
                                            <h4 className={"text-gold text-sm"}>{comment.user_name}</h4>
                                            <p className={"text-white"}>{comment.comment}</p>
                                        </div>
                                    </div>
                                ))}
                            </>
                    }
                </div>
            </div>
        </section>
    );
}

export default Comments;