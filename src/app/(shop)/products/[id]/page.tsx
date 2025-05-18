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
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {priceFormatter} from "@/lib/utils/helpers";

export async function generateMetadata({params}: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const {id} = await params;
    const t = await getTranslations("product-single")
    const response = await fetch(`https://viva-back-end.onrender.com/api/records/products/${id}`, {
        headers: {
            api_key: API_KEY,
        }
    });
    if (response.status === 404) {
        notFound();
    }
    if (!response.ok) {
        throw new Error(t("error-message"));
    }
    const product: Product = await response.json();
    return {
        title: product.title
    }
}


async function SingleProducts({params}: { params: Promise<{ id: string }> }) {
    const t = await getTranslations("product-single");
    const {id} = await params;
    const response = await fetch(`https://viva-back-end.onrender.com/api/records/products/${id}`, {
        headers: {
            api_key: API_KEY,
        }
    });
    if (response.status === 404) {
        notFound();
    }
    if (!response.ok) {
        throw new Error(t("error-message"));
    }
    const product: Product = await response.json();
    return (
        <>
            <Navigation/>
            <section id={"intro"}
                     className={"flex flex-col items-center justify-center gap-8  max-md:gap-12  w-full h-screen relative"}>
                <div
                    className={"grid grid-cols-2 w-4/5 items-center max-sm:grid-cols-1 xl:w-3/5 max-sm:justify-items-center max-sm:gap-5"}>
                    <div className={"flex flex-col gap-7 max-sm:items-center max-sm:gap-4 "}>
                        <h2 className={"font-semibold text-white text-2xl font-fuzzy max-md:text-xl max-sm:text-lg light:text-black"}>{product.title}</h2>
                        <h4 className={"text-gold text-4xl max-md:text-2xl max-sm:text-xl max-sm:text-center light:text-darkerGold"}>{product.shortDes}</h4>
                        <Link href={"#addToCart"}>
                            <button
                                className={"px-10 py-3 bg-darkerGold rounded-md shadow shadow-black text-white/80 w-fit cursor-pointer max-md:px-5 max-md:py-2 max-sm:text-sm "}> {t("addToCart")}
                            </button>
                        </Link>
                    </div>
                    <div className={"flex items-center justify-center max-sm:row-start-1"}>
                        <Image src={`http://api.alikooshesh.ir:3000${product.images[0]}`} alt={"image"} width={400}
                             height={400} className={"max-md:w-60 rounded-lg"}/>
                    </div>
                </div>
                <div className={"flex items-center justify-center gap-16 max-md:gap-8 w-3/5 mt-8"}>
                    <div className={"flex flex-col items-center gap-4"}>
                        <Image src={original.src} alt={"original"} width={42} height={42}
                               className={"max-md:w-10 max-sm:w-8"}/>
                        <p className={"text-gold light:text-darkerGold font-light text-xl max-sm:text-[16px] text-nowrap"}>
                            {t("originality")}
                        </p>
                    </div>
                    <div className={"flex flex-col items-center gap-4"}>
                        <Image src={bestPrice.src} alt={"bestPrice"} width={42} height={42}
                               className={"max-md:w-10 max-sm:w-8"}/>
                        <p className={"text-gold light:text-darkerGold font-light text-xl max-sm:text-[16px] text-nowrap"}>
                            {t("bestPrice")}
                        </p>
                    </div>
                    <div className={"flex flex-col items-center gap-4"}>
                        <Image src={delivery.src} alt={"delivery"} width={42} height={42}
                               className={"max-md:w-10 max-sm:w-8"}/>
                        <p className={"text-gold light:text-darkerGold font-light text-xl max-sm:text-[16px]  text-nowrap"}>
                            {t("freeDeliver")}
                        </p>
                    </div>

                </div>
                <DebounceArrow/>
                <SocialLink/>
            </section>
            <section id={"details"}
                     className={"grid grid-cols-2 items-center w-full min-h-screen max-md:grid-cols-1 max-sm:justify-items-center"}>
                <div className={"flex items-center justify-center"}>
                    {product.images[1] ?
                        <Image
                            src={`http://api.alikooshesh.ir:3000${product.images[1]}`}
                            alt={product.slug} width={400} height={400}
                            className={"rounded-2xl drop-shadow-lg max-lg:w-78 "}/>
                        :
                        <Image
                            src={`http://api.alikooshesh.ir:3000${product.images[0]}`}
                            alt={product.slug} width={400} height={400}
                            className={"rounded-2xl drop-shadow-lg max-lg:w-78 "}/>
                    }
                </div>
                <div
                    className={"grid grid-cols-3  gap-x-20 gap-y-10 w-fit max-md:grid-cols-4  max-md:items-center max-md:w-full max-sm:w-4/6 max-sm:grid-cols-1 max-md:gap-x-10 max-sm:gap-2 max-sm:my-10"}>
                    <h2 className={"text-white light:text-black font-bold text-3xl col-span-full max-sm:text-xl"}>{t("details")}</h2>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white max-sm:text-sm light:text-black"}>{t("name")}</p>
                        <p className={"text-darkerGold text-xl max-sm:text-[16px]"}>{product.title}</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white max-sm:text-sm light:text-black"}>{t("brand")}</p>
                        <p className={"text-darkerGold text-xl max-sm:text-[16px]"}>{product.brand}</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white max-sm:text-sm light:text-black"}>{t("gender")}</p>
                        <p className={"text-darkerGold text-xl max-sm:text-[16px]"}>{product.gender}</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white max-sm:text-sm light:text-black"}>{t("concentration")}</p>
                        <p className={"text-darkerGold text-xl max-sm:text-[16px]"}>{product.concentration}</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white max-sm:text-sm light:text-black"}>{t("volume")}</p>
                        <p className={"text-darkerGold text-xl max-sm:text-[16px]"}>{product.volume.join(" , ")}</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white max-sm:text-sm light:text-black"}>{t("fragrance")}</p>
                        <p className={"text-darkerGold text-xl max-sm:text-[16px]"}>{product.fragrance.join(" , ")}</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white max-sm:text-sm light:text-black"}>{t("position")}</p>
                        <p className={"text-darkerGold text-xl max-sm:text-[16px]"}>{product.position.join(" , ")}</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white max-sm:text-sm light:text-black"}>{t("season")}</p>
                        <p className={"text-darkerGold text-xl max-sm:text-[16px]"}>{product.season.join(" , ")}</p>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-white max-sm:text-sm light:text-black"}>{t("releaseYear")}</p>
                        <p className={"text-darkerGold text-xl max-sm:text-[16px]"}>
                            {product.releaseYear}</p>
                    </div>
                </div>
            </section>
            <section id={"addToCart"}
                     className={"min-h-screen grid grid-cols-2 max-md:grid-cols-1 max-lg:gap-10 w-full px-32 max-lg:px-25 max-md:px-10 py-10 max-lg:py-7 max-md:py-10 justify-items-center items-center"}>
                <div className={"flex flex-col gap-8 max-md:gap-5 max-sm:items-center"}>
                    <div className={"flex flex-col gap-3 max-sm:text-center"}>
                        <h1 className={"text-4xl text-darkerGold font-fuzzy text-nowrap max-sm:text-wrap max-md:text-3xl"}>{product.title}</h1>
                        <p className={"text-darkerGold text-xl max-md:text-lg"}>{product.shortDes}</p>
                    </div>
                    <div className={"text-gold text-3xl max-md:text-2xl  flex items-center gap-1 light:text-black"}>
                        <span>{priceFormatter(+product.price - (+product.price * (+product.discount / 100)))} {t("currency")}</span>
                        {
                            product.discount !== "0" && (
                                <span
                                    className={" rounded-full bg-rose-900 text-white py-1 px-4 text-sm -rotate-35 mb-2"}>{product.discount} %</span>
                            )
                        }
                    </div>
                    <p className={"text-white light:text-black max-sm:text-sm"}>
                        {product.description}
                    </p>
                    <AddToCart product={product}/>
                </div>
                <Slider images={product.images} slug={product.slug}/>
            </section>
            <Comments productId={product.id}/>
        </>
    )
        ;
}

export default SingleProducts;