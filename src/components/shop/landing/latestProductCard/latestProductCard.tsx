import React from 'react';
import Button from "@/components/shop/base/button/button";
import {Product} from "@/interfaces/interfaces";
import Link from "next/link";
import {useTranslations} from "next-intl";
import SlideIn from "@/components/animations/SlideIn/SlideIn";
import Image from "next/image";
import {priceFormatter} from "@/lib/utils/helpers";

function LatestProductCard({product}: { product: Product }) {
    const t = useTranslations("latest");
    return (
        <SlideIn x={100}
            className={"flex gap-3 items-center bg-stone-950/80 light:bg-primary backdrop-blur-2xl rounded-2xl shadow-2xl ring-2 ring-primary light:ring-zinc-600 shadow-black p-3"}>
            <Image src={`https://viva-back-end.onrender.com${product.images[0]}`} alt={"tom ford"} width={140} height={140} className={"max-lg:w-[100px]"}/>
            <div className={"flex flex-col h-full justify-between max-md:gap-4 p-1 flex-1 "}>
                <div className={"flex flex-col gap-2 w-full"}>
                    <h2 className={"text-darkerGold font-semibold line-clamp-1 font-fuzzy"}>{product.title}</h2>
                    <p className={"text-white"}>{priceFormatter(+product.price - (+product.price * (+product.discount / 100)))}  {t("currency")}</p>
                </div>
                <div className={"self-end"}>
                    <Link href={`/products/${product.id}`}>
                        <Button
                            className={"p-2 px-4 text-sm rounded-md shadow shadow-black bg-primary text-white cursor-pointer light:bg-secondary light:text-black"}
                            type={"button"}>
                            {t("seeMore")}
                        </Button>
                    </Link>
                </div>
            </div>
        </SlideIn>
    );
}

export default LatestProductCard;