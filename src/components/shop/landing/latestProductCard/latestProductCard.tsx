import React from 'react';
import Image from "next/image";
import tomford from "@/assets/images/category-women-sweet.png";
import {FaCartPlus} from "react-icons/fa6";
import Button from "@/components/shop/base/button/button";
import {Product} from "@/interfaces/interfaces";
import Link from "next/link";

function LatestProductCard({product}: { product: Product }) {
    return (
        <div
            className={"flex gap-3 items-center bg-stone-950/80 backdrop-blur-2xl rounded-2xl shadow-2xl ring-2 ring-primary shadow-black p-3"}>
            <img src={`http://api.alikooshesh.ir:3000${product.images[0]}`} alt={"tom ford"} width={140} height={140}/>
            <div className={"flex flex-col h-full justify-between p-1 flex-1"}>
                <div className={"flex flex-col gap-2 w-full"}>
                    <h2 className={"text-darkerGold font-semibold line-clamp-1 font-fuzzy"}>{product.title}</h2>
                    <p className={"text-white"}>{product.price} تومن</p>
                </div>
                <div className={"flex items-center self-end gap-2 "}>
                    <Link href={`/products/${product.id}`}>
                        <Button
                            className={"p-2 px-4 text-sm rounded-md shadow shadow-black bg-primary text-white cursor-pointer"}
                            type={"button"}>
                            مشاهده جزئیات
                        </Button>
                    </Link>
                    <Button className={"p-2 rounded-md shadow shadow-black bg-primary text-white "}
                            type={"button"}>
                        <FaCartPlus/>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default LatestProductCard;