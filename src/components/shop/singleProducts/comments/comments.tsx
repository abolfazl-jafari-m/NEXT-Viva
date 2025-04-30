"use client"
import React, {FormEvent, useState} from 'react';
import {FaCircleUser} from "react-icons/fa6";
import {Comment, UserInterface} from "@/interfaces/interfaces";
import {getCookie} from "cookies-next/client";
import toast from "react-hot-toast";
import {useTranslations} from "next-intl";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {addComment, getCommentsByProductId} from "@/services/comments";
import {BeatLoader, PuffLoader} from "react-spinners";
import {getUser} from "@/services/users";

function Comments({productId}: { productId: string }) {
    const [comment, setComment] = useState<string>("")
    const queryClient = useQueryClient();

    const {isLoading, data: comments} = useQuery({
        queryKey: ["comments"],
        queryFn: () => getCommentsByProductId(productId)
    });

    const {mutate: createComment, isPending} = useMutation({
        mutationKey: ["addComment"],
        mutationFn: ({productId, username, comment}: {
            productId: string,
            comment: string,
            username: string
        }) => addComment(productId, comment, username)
    });


    const token = getCookie("accessToken");
    const t = useTranslations("product-single")


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!token) {
            toast(t("auth-message"), {
                position: "top-right",
                style: {backgroundColor: "#fff", color: "#000"},
                icon: "😃"
            })
            return null;
        }
        if (comment === "") {
            toast.error(t("comment-required-message"), {
                style: {backgroundColor: "white", color: "#000"}, position: "top-right", icon: "🤦‍♂️"
            });
            return null;
        }
        const user: UserInterface = await getUser(token);
        createComment({productId, comment: comment, username: user.name}, {
            onSuccess: () => {
                {
                    setComment("");
                    queryClient.invalidateQueries({queryKey: ["comments"]});
                    toast.success(t("comment-success"), {
                        style: {backgroundColor: "white", color: "#000"}, position: "top-right", icon: "✔"
                    })
                }
            },
            onError: () => {
                toast.error(t("comment-error"), {
                    style: {backgroundColor: "white", color: "#000"}, position: "top-right", icon: "🍌"
                })
            }
        })
    }
    return (
        <section className={"w-full min-h-screen p-20 max-lg:p-15 max-md:p-10 max-sm:p-5"} id={"comments"}>
            <h3 className={"text-white light:text-black font-semibold text-5xl max-lg:text-3xl max-md:text-xl mb-10"}>{t("comments")}</h3>
            <div className={"flex flex-col gap-10"}>
                <form className={"flex flex-col gap-4"} onSubmit={handleSubmit}>
                    <p className={"text-darkerGold text-xl"}>{t("addYourComment")}</p>
                    <input type={"text"} name={"comment"} value={comment} onChange={(e) => setComment(e.target.value)}
                           className={"text-white light:bg-primary font-extralight shadow shadow-black outline-none rounded-md py-2 px-8 border border-white light:border-black w-full placeholder:text-white/40"}
                           placeholder={t("writeHere")}/>
                    {isPending ?
                        <div className={"self-end"}>
                            <BeatLoader color={"gold"} size={18}/>
                        </div>
                        :
                        <button
                            className={"bg-secondary light:bg-primary text-black  light:text-white self-end px-8 py-2 max-md:px-5 max-md:py-1 max-sm:text-sm rounded-md shadow shadow-black cursor-pointer"}>{t("submitComment")}
                        </button>}
                </form>
                {isLoading ?
                    <div className={"flex items-center justify-center w-full"}>
                        <PuffLoader color={"gold"} size={35}/>
                    </div>
                    :
                    <div className={"flex flex-col gap-10 px-10 max-md:px-5 max-md:gap-4"}>
                        {
                            comments.length === 0 ?
                                <div className={"flex items-center justify-center mt-10"}>
                                    <p className={"font-semibold text-2xl text-white max-md:text-xl max-sm:text-lg max-md:text- light:text-black"}>{t("beTheFirstOne")}</p>
                                </div>
                                :
                                <>
                                    {comments.map((comment: Comment) => (
                                        <div key={comment.id} className={"flex items-center gap-5"}>
                                            <FaCircleUser size={40} className={"text-white light:text-black"}/>
                                            <div className={"flex flex-col gap-2"}>
                                                <h4 className={"text-gold light:text-darkerGold text-sm"}>{comment.username}</h4>
                                                <p className={"text-white light:text-black"}>{comment.comment}</p>
                                            </div>
                                        </div>
                                    ))}
                                </>
                        }
                    </div>
                }
            </div>
        </section>
    );
}

export default Comments;