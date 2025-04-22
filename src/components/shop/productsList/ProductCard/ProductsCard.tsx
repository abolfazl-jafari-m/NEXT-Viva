import React from 'react';
import Button from "@/components/shop/base/button/button";
import {FaCartPlus, FaHeart} from "react-icons/fa6";
import {Product} from "@/interfaces/interfaces";
import Link from "next/link";

function ProductsCard({product}: { product: Product }) {
    return (
        <div
            className={"rounded-lg shadow-black shadow-2xl bg-zinc-950/60 text-white  ring-2 ring-zinc-700 p-4 flex flex-col items-center gap-5  justify-between"}>
            <img src={`http://api.alikooshesh.ir:3000${product.images[0]}`} alt={"image"} width={150} height={150}
                 className={"rounded-lg w-full"}/>
            <div className={"w-full flex items-center justify-between gap-3"}>
                <div className={"flex flex-col gap-2 "}>
                    <Link href={`/products/${product.id}`}>
                        <h3 className={"font-semibold text-darkerGold text-xl  line-clamp-1"}>{product.title}</h3>
                    </Link>
                    <p>{product.price} تومان</p>
                </div>
                <div className={"flex flex-col gap-2 "}>
                    <Button className={"bg-primary text-white p-2 rounded-lg shadow-lg shadow-black"} type={"button"}>
                        <FaCartPlus/>
                    </Button>
                    <Button className={"bg-primary text-white p-2 rounded-lg shadow-lg shadow-black "} type={"button"}>
                        <FaHeart/>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductsCard;