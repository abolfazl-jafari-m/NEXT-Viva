"use client"
import React from 'react';
import {FaUser} from "react-icons/fa6";
import {getUser} from "@/services/users";
import {BeatLoader} from "react-spinners";
import {UserInterface} from "@/interfaces/interfaces";
import {useQuery} from "@tanstack/react-query";


function UserInfo() {
    const {isLoading, data: user} = useQuery<UserInterface>({
        queryKey: ["user"],
        queryFn: async () => await getUser(JSON.parse(localStorage.getItem("token") as string))
    })
    if (isLoading) return <BeatLoader/>

    return (
        <li className={" flex items-center gap-2"}>
            {user && <p className={"capitalize text-sm font-bold font-fuzzy"} dir={"ltr"}>welcome {user.name}🤙</p>}
            <div
                className={"rounded-lg bg-darkChocolate overflow-hidden text-white shadow-md shadow-black w-8.5 h-8.5 text-xl flex items-center justify-center"}>
                {
                    user ? <img src={`http://api.alikooshesh.ir:3000${user.avatar}`} alt={"avatar"}
                                className={"w-full h-full"}/> : <FaUser/>
                }
            </div>
        </li>
    );
}

export default UserInfo;