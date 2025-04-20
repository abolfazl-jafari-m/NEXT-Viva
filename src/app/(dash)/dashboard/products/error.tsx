'use client'
export default function Error({error, reset}: { error: Error & { digest?: string }, reset: () => void}) {
    return (
        <div className={"w-full h-full flex items-center justify-center gap-2 flex-col"}>
            <h2 className={"text-2xl"}>{error.message}</h2>
            <button className={"px-7 py-2 rounded-md shadow shadow-black bg-darkChocolate text-white cursor-pointer"}
                    onClick={
                        () => reset()
                    }
            >
                دوباره تلاش کنید
            </button>
        </div>
    )
}