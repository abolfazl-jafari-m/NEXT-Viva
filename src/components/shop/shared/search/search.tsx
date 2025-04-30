"use client";
import React, {useState} from 'react';
import {CgClose, CgSearch} from "react-icons/cg";
import {AnimatePresence, motion} from "motion/react";
import {useDebouncedCallback} from "use-debounce";
import {searchProducts} from "@/services/products";
import {Product} from "@/interfaces/interfaces";
import Link from "next/link";
import Image from "next/image";
import {useTranslations} from "next-intl";

function Search() {
    const t = useTranslations("search");
    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [value, setValue] = useState<string>("");
    const debounce = useDebouncedCallback((value: string) => {
        if (value !== "") {
            searchProducts(value).then((res) => setProducts(res))
        }
        setValue(value);
    }, 1000);
    return (
        <div>
            <CgSearch  onClick={() => setIsOpen(true)} className={"cursor-pointer text-2xl max-sm:text-xl light:max-md:text-black"}/>
            <AnimatePresence>
                {
                    isOpen && (
                        <>
                            <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}}
                                        exit={{opacity: 0, scale: 0}} transition={{duration: 0.3}}
                                        className={"bg-primary/80 fixed top-0 left-0 w-full h-screen backdrop-blur-2xl z-20 flex items-center justify-center flex-col gap-4"}>
                            <span
                                className={"absolute top-10 left-10 rounded-full bg-darkerGold text-white p-1 cursor-pointer"}
                                onClick={() => setIsOpen(false)}>
                                <CgClose/>
                            </span>
                                <div className={"bg-secondary rounded-lg ring ring-gold px-3 py-2 w-1/3 max-lg:w-2/3 max-md:w-3/4"}>
                                    <input className={"w-full outline-none border-none bg-transparent text-black"}
                                           onChange={(e) => debounce(e.target.value)}
                                           placeholder={t("search")}/>
                                </div>
                                <div
                                    className={"h-75 w-1/3 max-lg:w-2/3 max-md:w-3/4 overflow-y-auto no-scrollbar flex flex-col gap-4 px-4 py-2"}>
                                    {
                                        products.length > 0 ?
                                            products.map((product: Product) => (
                                                <div key={product.id}
                                                     className={"flex items-center gap-3 rounded-md bg-black  ring ring-zinc-700 p-2"}>
                                                    <Image src={`http://api.alikooshesh.ir:3000${product.images[0]}`} width={55} height={55} alt={product.slug}
                                                         className={"h-14 w-14 rounded-lg shadow shadow"}/>
                                                    <div className={"flex flex-col gap-2 text-white"}>
                                                        <Link href={`/products/${product.id}`} onClick={() => {setIsOpen(false)}}>
                                                            <h3 className={"text-lg max-sm:text-sm"}>{product.title}</h3>
                                                        </Link>
                                                        <p>{product.price}</p>
                                                    </div>
                                                </div>))
                                            :
                                            value !== "" &&
                                            <p className={"text-center"}>{t("noFounded")}</p>
                                    }
                                </div>
                            </motion.div>
                        </>
                    )
                }
            </AnimatePresence>
        </div>
    );
}

export default Search;