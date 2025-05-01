"use client";
import React from 'react';

export default function Error({error, reset}: { error: Error & { digest?: string }, reset: () => void }) {
    return (
        <div className={"flex items-center flex-col gap-5 justify-center  w-full h-screen"}>
            <h2 className={"font-semibold text-2xl text-white/70 text-center"}>مشکلی پیش آمده در حال حاضر قادر به سرویس
                دهی نمیباشیم لطفا بعدن تلاش کنید</h2>
            <button className={"px-6 py-2 rounded-lg bg-darkChocolate text-white cursor-pointer"}
                    onClick={
                        () => reset()
                    }
            >
                دوباره تلاش کنید
            </button>
        </div>
    )
}