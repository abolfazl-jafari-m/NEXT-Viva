"use client"
import React, {ChangeEvent, useMemo, useState} from 'react';
import {MdDelete, MdEdit, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {LuArrowDownWideNarrow} from "react-icons/lu";
import {pagination, priceFormatter} from "@/lib/utils/helpers";
import Button from "@/components/dash/base/button/button";
import Link from "next/link";
import {Product} from "@/interfaces/interfaces";
import {useTranslations} from "next-intl";
import {deleteProduct} from "@/services/products";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {BeatLoader} from "react-spinners";

function ProductTable({products}: { products: Product[] }) {
    const [productId, setProductId] = useState<string | null>(null);
    const [current, setCurrent] = useState<number>(0);
    const queryClient = useQueryClient();
    const {isPending, mutate} = useMutation({mutationKey: ["deleteProduct"], mutationFn: deleteProduct});
    const [itemPerPage, setItemPerPage] = useState<string>("5");
    const t = useTranslations("dashProducts")

    const paginatedItems = useMemo(() => {
        if (products.length > 0) {
            return pagination(products, +itemPerPage, current)
        } else {
            return []
        }
    }, [current, itemPerPage, products])

    const prev = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    }
    const next = () => {
        if (current < (products.length / +itemPerPage) - 1) {
            setCurrent(current + 1);
        }
    }

    const handleDelete = () => {
        mutate(productId as string, {
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ["products"]}).then(() => {
                    toast.success("محصول با موفقیت حذف شد")
                })
            },
            onError: () => {
                toast.error("مشکلی در حذف محصول پیش آمده");
            },
            onSettled: () => {
                setProductId(null);
            }
        })
    }


    return (
        <>
            <div
                className={"overflow-x-auto w-full max-h-[500px]  max-xl:max-h-[400px] max-md:max-h-[330px]  overflow-y-auto no-scrollbar rounded-sm "}>
                <table className={"border border-black border-collapse w-full  bg-darkChocolate"}>
                    <thead className={"bg-darkChocolate text-white sticky top-0 left-0 right-0 w-full"}>
                    <tr className={"text-xl  text-center w-full max-md:text-lg max-sm:text-[15px]"}>
                        <th className={"p-1 text-nowrap"}>{t("image")}</th>
                        <th className={"p-1 text-nowrap"}>{t("name")}</th>
                        <th className={"p-1 text-nowrap"}>{t("price")}</th>
                        <th className={"p-1 text-nowrap"}>{t("brand")}</th>
                        <th className={"p-1 text-nowrap"}>{t("actions")}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {paginatedItems.map(item => {
                        return (
                            <tr key={item.id}
                                className={"border border-black even:bg-secondary odd:bg-white text-center hover:bg-primary hover:text-white  transition-all duration-200 max-md:text-sm"}>
                                <td className={"p-2 max-sm:border max-sm:border-black/50 text-nowrap"}>
                                    <img src={`http://api.alikooshesh.ir:3000${item.images[0]}`} alt={item.title}
                                         className={"w-10 h-10 rounded-md mx-auto"}/>
                                </td>
                                <td className={"p-2 max-sm:border max-sm:border-black/50 text-nowrap"}>{item.title}</td>
                                <td className={"p-2 max-sm:border max-sm:border-black/50 text-nowrap"}>{priceFormatter(+item.price)}</td>
                                <td className={"p-2 max-sm:border max-sm:border-black/50 text-nowrap"}>{item.brand}</td>
                                <td className={"mx-auto p-2 max-sm:border max-sm:border-black/50 text-nowrap"}>
                                    <div className={"flex items-center justify-center gap-2 max-md:gap-1 max-sm:p-1.5"}>
                                        <Link href={`/dashboard/products/edit/${item.id}`}>
                                            <Button
                                                className={"bg-yellow-700 rounded-md p-2 text-white text-sm hover:bg-yellow-500 cursor-pointer"}
                                                type={"button"}>
                                                <MdEdit/>
                                            </Button>
                                        </Link>
                                        <Button onClick={() => setProductId(item.id)}
                                                className={"bg-rose-800 p-2 rounded-md text-white text-sm hover:bg-rose-600 cursor-pointer"}
                                                type={"button"}>
                                            <MdDelete/>
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}

                    </tbody>
                </table>

            </div>
            <div className={"flex items-center gap-6 max-md:justify-between"}>
                <div className={"flex items-center gap-4 text-lg"}>
                    <MdOutlineKeyboardArrowRight onClick={prev}/>
                    <MdOutlineKeyboardArrowLeft onClick={next}/>
                </div>
                <span className={"text-sm"}>
                  {t("sheet")} {current + 1} از {Math.ceil(products.length / +itemPerPage)}
                </span>
                <div className={"w-32 border border-black rounded-md  relative"}>
                    <select className={" appearance-none w-full outline-none border-none px-1"}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                setCurrent(0);
                                setItemPerPage(e.target.value)
                            }}
                            value={itemPerPage}>
                        <option value={"5"}>5</option>
                        <option value={"7"}>7</option>
                        <option value={products.length}>{t("all")}</option>
                    </select>
                    <div className={"absolute top-1/2 -translate-y-1/2 left-1"}>
                        <LuArrowDownWideNarrow/>
                    </div>
                </div>
            </div>
            {
                productId && (
                    <div
                        className={"bg-primary/40 backdrop-blur-2xl fixed bottom-0  top-0 left-0  right-0  flex items-center justify-center"}>
                        <div
                            className={"bg-white rounded-md shadow-black shadow-lg p-3 flex flex-col gap-2 text-white font-semibold"}>
                            <p className={"text-black"}>آیا از حذف این محصول اطمینان دارید ؟</p>
                            <div className={"flex items-center justify-center gap-5"}>
                                {isPending ?
                                    <BeatLoader color={"purple"}/>
                                    :
                                    <>
                                        <Button
                                            className={"px-7 py-1 rounded-md bg-rose-800 shadow shadow-black cursor-pointer"}
                                            type={"button"} onClick={() => setProductId(null)}>خیر
                                        </Button>
                                        <Button
                                            className={"px-7 py-1 rounded-md bg-cyan-800 shadow shadow-black cursor-pointer"}
                                            type={"button"}
                                            onClick={handleDelete}>بله
                                        </Button>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default ProductTable;