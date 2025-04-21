import React from 'react';
import Button from "@/components/shop/base/button/button";
import {FaCartPlus, FaHeart} from "react-icons/fa6";
import {Product} from "@/interfaces/interfaces";

function ProductsCard({product}: {product: Product}) {
    return (
        <div className={"rounded-lg shadow-black shadow-2xl bg-primary text-white  ring-1 ring-darkerGold p-4 flex flex-col items-center gap-5  justify-between"}>
            <img src={`http://api.alikooshesh.ir:3000${product.images[0]}`} alt={"image"} width={150} height={150} className={"rounded-lg w-full"}/>
            <div className={"w-full flex items-center justify-between gap-3"}>
                <div className={"flex flex-col gap-2 "}>
                    <h3 className={"font-semibold text-darkerGold text-xl  line-clamp-1"}>{product.title}</h3>
                    <p>{product.price} تومان</p>
                </div>
                <div className={"flex flex-col gap-2 "}>
                    <Button className={"bg-darkerGold text-white p-1.5 rounded-lg shadow shadow-black"} type={"button"}>
                        <FaCartPlus />
                    </Button>
                    <Button className={"bg-darkerGold text-white p-1.5 rounded-lg shadow shadow-black "} type={"button"}>
                        <FaHeart />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductsCard;