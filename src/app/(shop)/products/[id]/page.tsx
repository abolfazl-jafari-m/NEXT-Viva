import React from 'react';
import Image from "next/image";
import original from "@/assets/images/original.svg"
import bestPrice from "@/assets/images/number-one.svg"
import delivery from "@/assets/images/delivery.svg"
import DebounceArrow from "@/components/shop/landing/DebounceArrow/DebounceArrow";
import Slider from "@/components/shop/singleProducts/slider/slider";
import AddToCart from "@/components/shop/singleProducts/addToCart/addToCart";
import Navigation from "@/components/shop/singleProducts/navigation/navigation";
import SocialLink from "@/components/shop/landing/socialLink/socialLink";
import Comments from "@/components/shop/singleProducts/comments/comments";
import {notFound} from "next/navigation";
import {Product} from "@/interfaces/interfaces";
import {API_KEY} from "@/constants/configs";
import Link from "next/link";


async function SingleProducts({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    const response = await fetch(`http://api.alikooshesh.ir:3000/api/records/products/${id}`, {
        headers: {
            api_key: API_KEY,
        }
    });
    if (response.status === 404) {
        notFound();
    }
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const product: Product = await response.json();
    return (
        <>
            <Navigation/>
            <section id={"intro"} className={"flex flex-col items-center justify-center w-full h-screen relative"}>
                <div className={"grid grid-cols-2 w-4/5 items-center"}>
                    <div className={"flex flex-col gap-7 "}>
                        <h2 className={"font-semibold text-white text-2xl font-fuzzy "}>{product.title}</h2>
                        <h4 className={"text-gold text-4xl"}>{product.shortDes}</h4>
                        <Link href={"#addToCart"}>
                            <button
                                className={"px-10 py-3 bg-darkerGold rounded-md shadow shadow-black text-white/80 w-fit cursor-pointer"}>اضافه
                                کردن به سبد خرید
                            </button>
                        </Link>
                    </div>
                    <div className={"flex items-center justify-center"}>
                        <img src={`http://api.alikooshesh.ir:3000${product.images[0]}`} alt={"image"} width={400}
                             height={400}/>
                    </div>
                </div>
                <div className={"flex items-center justify-center gap-16 w-3/5 mt-8"}>
                    <div className={"flex flex-col items-center gap-4"}>
                        <Image src={original.src} alt={"original"} width={42} height={42}/>
                        <p className={"text-gold font-light text-xl"}>
                            تضمین اصالت
                        </p>
                    </div>
                    <div className={"flex flex-col items-center gap-4"}>
                        <Image src={bestPrice.src} alt={"bestPrice"} width={42} height={42}/>
                        <p className={"text-gold font-light text-xl"}>
                            بهترین قیمت
                        </p>
                    </div>
                    <div className={"flex flex-col items-center gap-4"}>
                        <Image src={delivery.src} alt={"delivery"} width={42} height={42}/>
                        <p className={"text-gold font-light text-xl"}>
                            ارسال رایگان
                        </p>
                    </div>

                </div>
                <DebounceArrow/>
                <SocialLink/>
            </section>
            <section id={"details"} className={"grid grid-cols-2 items-center w-full h-screen"}>
                <div className={"flex items-center justify-center"}>

                    <img
                        src={`http://api.alikooshesh.ir:3000${product.images[1] ? product.images[1] : product.images[0]} `}
                        alt={product.slug} width={400} height={400}
                        className={"rounded-2xl drop-shadow-lg"}/>
                </div>

                <div className={"grid grid-cols-3  gap-x-20 gap-y-10 w-fit"}>
                    <h2 className={"text-white font-bold text-3xl col-span-full"}>مشخصات</h2>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white"}>نام عطر</p>
                        <p className={"text-darkerGold text-xl"}>{product.title}</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white"}>برند</p>
                        <p className={"text-darkerGold text-xl"}>{product.brand}</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white"}>جنسیت</p>
                        <p className={"text-darkerGold text-xl"}>{product.gender}</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white"}>غلطت</p>
                        <p className={"text-darkerGold text-xl"}>{product.concentration}</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white"}>حجم</p>
                        <p className={"text-darkerGold text-xl"}>{product.volume.join(" , ")}</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white"}>رایحه</p>
                        <p className={"text-darkerGold text-xl"}>{product.fragrance.join(" , ")}</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white"}>موقعیت</p>
                        <p className={"text-darkerGold text-xl"}>{product.position.join(" , ")}</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white"}>فصل</p>
                        <p className={"text-darkerGold text-xl"}>{product.season.join(" , ")}</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white"}>سال عرضه</p>
                        <p className={"text-darkerGold text-xl"}>
                            {product.releaseYear}</p>
                    </div>
                </div>
            </section>
            <section id={"addToCart"}
                     className={"h-screen grid grid-cols-2 w-full px-32 py-10 justify-items-center items-center"}>
                <div className={"flex flex-col gap-8"}>
                    <div className={"flex flex-col gap-3"}>

                        <h1 className={"text-4xl text-darkerGold font-fuzzy text-nowrap"}>{product.title}</h1>
                        <p className={"text-darkerGold text-xl"}>{product.shortDes}</p>
                    </div>
                    <div className={"text-gold text-3xl flex items-center gap-1"}>
                        <span>{+product.price - (+product.price * (+product.discount / 100))} تومن</span>
                        {
                            product.discount !== "0" && (
                                <span
                                    className={" rounded-full bg-rose-900 text-white py-1 px-4 text-sm -rotate-35 mb-2"}>{product.discount} %</span>
                            )
                        }
                    </div>
                    <p className={"text-white "}>
                        {product.description}
                    </p>
                    <AddToCart/>
                </div>
                <Slider images={product.images} slug={product.slug}/>
            </section>
            <Comments comments={product.comments}/>
        </>
    )
        ;
}

export default SingleProducts;