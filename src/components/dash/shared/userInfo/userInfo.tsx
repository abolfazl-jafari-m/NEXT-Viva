"use client"
import React from 'react';
import {FaUser} from "react-icons/fa6";
import {getUser} from "@/services/users";
import {BeatLoader} from "react-spinners";
import {UserInterface} from "@/interfaces/interfaces";
import {useQuery} from "@tanstack/react-query";
import {getCookie} from "cookies-next";


function UserInfo() {
    const accessToken = getCookie("accessToken") as string;
    const {isLoading, data: user} = useQuery<UserInterface>({
        queryKey: ["user"],
        queryFn: async () => await getUser(accessToken)
    })
    if (isLoading) return <BeatLoader/>

    return (
        <li className={" flex items-center gap-2 max-sm:gap-1.5"}>
            {user && <p className={"capitalize text-sm font-bold font-fuzzy max-sm:text-xs max-xs:hidden"}
                        dir={"ltr"}>welcome {user.name}🤙</p>}
            <div
                className={"rounded-lg bg-darkChocolate overflow-hidden text-white shadow-md shadow-black w-8.5 h-8.5 text-xl flex items-center justify-center max-sm:h-6.5 max-sm:w-6.5 "}>
                {
                    user ? <img src={`http://api.alikooshesh.ir:3000${user.avatar}`} alt={"avatar"}
                                className={"w-full h-full"}/> : <FaUser className={"p-1"}/>
                }
            </div>
        </li>
    );
}

export default UserInfo;