import React from 'react';
import Button from "@/components/shop/base/button/button";
import {FaHeart} from "react-icons/fa6";
import {Product} from "@/interfaces/interfaces";
import Link from "next/link";
import {useTranslations} from "next-intl";
import Image from "next/image";

function ProductsCard({product}: { product: Product }) {
    const t= useTranslations("products-page")
    return (
        <div
            className={"rounded-lg shadow-black shadow-2xl bg-zinc-950/60 text-white  ring-2 ring-zinc-700 p-4 flex flex-col items-center gap-5  justify-between relative overflow-hidden"}>
            {+product.discount > 0 &&<span dir={"ltr"}
                className={"-rotate-45 -left-8 top-5 absolute bg-rose-700 text-white px-15 py-1"}>-{product.discount}%</span>}
            <Image src={`http://api.alikooshesh.ir:3000${product.images[0]}`} alt={"image"} width={180} height={180}
                 className={"rounded-lg"}/>
            <div className={"w-full flex items-center justify-between gap-3 max-lg:flex-col"}>
                <div className={"flex flex-col gap-2 "}>
                    <Link href={`/products/${product.id}`}>
                        <h3 dir={"ltr"} className={"font-semibold text-darkerGold text-xl  max-lg:text-lg font-fuzzy"}>{product.title}</h3>
                    </Link>
                    <p>{+product.price - (+product.price * (+product.discount / 100))} {t("currency")}</p>
                </div>
                <div className={"max-lg:w-full"}>
                    <Button className={"bg-primary text-white p-2 rounded-lg shadow-lg shadow-black "} type={"button"}>
                        <FaHeart/>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductsCard;