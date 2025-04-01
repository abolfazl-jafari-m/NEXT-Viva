import React from 'react';
import Image from "next/image";
import tomford from "@/assets/images/category-women-sweet.png"
import bitter from "@/assets/images/category-womens-bitter.png"
import cool from "@/assets/images/category-mens-cool.png"


function Latest() {
    return (
        <section className={"w-full h-full  flex items-center justify-center flex-col"}>
            <h2 className={"text-4xl text-white font-bold"}>آخرین محصولات</h2>
            <div className={"grid grid-cols-4  mt-13  gap-8 gap-y-15 w-full"}>
                <div className={"flex flex-col gap-3 items-center"}>
                    <Image src={tomford.src} alt={"tom ford"} width={180} height={180}/>
                    <h2 className={"text-gold"}>عطر تام فورد فاکینگ فبیولس</h2>
                </div>
                <div className={"flex flex-col gap-3 items-center"}>
                    <Image src={bitter.src} alt={"tom ford"} width={180} height={180}/>
                    <h2 className={"text-gold"}>عطر تام فورد فاکینگ فبیولس</h2>
                </div>
                <div className={"flex flex-col gap-3 items-center"}>
                    <Image src={tomford.src} alt={"tom ford"} width={180} height={180}/>
                    <h2 className={"text-gold"}>عطر تام فورد فاکینگ فبیولس</h2>
                </div>
                <div className={"flex flex-col gap-3 items-center"}>
                    <Image src={bitter.src} alt={"tom ford"} width={180} height={180}/>
                    <h2 className={"text-gold"}>عطر تام فورد فاکینگ فبیولس</h2>
                </div>
                <div className={"flex flex-col gap-3 items-center"}>
                    <Image src={cool.src} alt={"tom ford"} width={180} height={180}/>
                    <h2 className={"text-gold"}>عطر تام فورد فاکینگ فبیولس</h2>
                </div>
                <div className={"flex flex-col gap-3 items-center"}>
                    <Image src={bitter.src} alt={"tom ford"} width={180} height={180}/>
                    <h2 className={"text-gold"}>عطر تام فورد فاکینگ فبیولس</h2>
                </div>
                <div className={"flex flex-col gap-3 items-center"}>
                    <Image src={tomford.src} alt={"tom ford"} width={180} height={180}/>
                    <h2 className={"text-gold"}>عطر تام فورد فاکینگ فبیولس</h2>
                </div>
                <div className={"flex flex-col gap-3 items-center"}>
                    <Image src={cool.src} alt={"tom ford"} width={180} height={180}/>
                    <h2 className={"text-gold"}>عطر تام فورد فاکینگ فبیولس</h2>
                </div>
            </div>

        </section>
    );
}

export default Latest;