"use client"
import React from 'react';
import Input from "@/components/dash/base/input/input";
import Select, {CSSObjectWithLabel} from "react-select";

import FileUpload from "@/components/dash/base/fileUpload/fileUpload";
import Button from "@/components/dash/base/button/button";
import {useRouter} from "next/navigation";

const style = {control: (base: CSSObjectWithLabel) => ({...base, border: 0, boxShadow: "none"})}

function ProductForm() {
    const router = useRouter();
    return (
        <form className={"grid grid-cols-2 gap-10 w-full h-full"}>
            <div className={"flex flex-col gap-4"}>
                <div className={"flex flex-col gap-2"}>
                    <label htmlFor={"title"} className={"font-bold"}>
                        عنوان
                    </label>
                    <Input className={"rounded-md border-2 border-darkChocolate px-2 py-1"} name={"title"}
                           id={"title"}/>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <label htmlFor={"shortDes"} className={"font-bold"}>
                        توضیح کوتاه
                    </label>
                    <Input className={"rounded-md border-2 border-darkChocolate px-2 py-1"} name={"shortDes"}
                           id={"shortDes"}/>
                </div>
                <div className={"grid grid-cols-2 gap-5 w-full"}>
                    <div className={"flex flex-col gap-2"}>
                        <label htmlFor={"price"} className={"font-bold"}>
                            قیمت
                        </label>
                        <Input className={"rounded-md border-2 border-darkChocolate px-2 py-1 appearance-none"}
                               name={"price"}
                               id={"price"}/>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <label htmlFor={"releaseYear"} className={"font-bold"}>
                            سال تولید
                        </label>
                        <Input className={"rounded-md border-2 border-darkChocolate px-2 py-1 appearance-none"}
                               name={"releaseYear"}
                               id={"releaseYear"}/>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <label htmlFor={"brand"} className={"font-bold"}>
                            برند
                        </label>
                        <Select
                            styles={style}
                            className={"rounded-md border-2 !border-darkChocolate !outline-none"} name={"brand"}
                            placeholder={"انتخاب کنید"}
                            options={[{value: 1, label: "ساواج"}, {value: 2, label: "تام فورد"}, {
                                value: 3,
                                label: "لویی ویتون"
                            }]} isRtl={true}/>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <label htmlFor={"volume"} className={"font-bold"}>
                            حجم
                        </label>
                        <Select
                            styles={style}
                            className={"rounded-md border-2 !border-darkChocolate !outline-none"} name={"volume"}
                            id={"volume"}
                            isMulti={true}
                            placeholder={"انتخاب کنید"}
                            options={[{value: 1, label: "125"}, {value: 2, label: "50"},
                                {value: 3, label: "100"}, {value: 4, label: "200"}, {value: 5, label: "250"},]}
                            isRtl={true}/>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <label htmlFor={"concentration"} className={"font-bold"}>
                            غلظت
                        </label>
                        <Select
                            styles={style}
                            className={"rounded-md border-2 !border-darkChocolate !outline-none"} name={"concentration"}
                            id={"concentration"}
                            placeholder={"انتخاب کنید"}
                            options={[{value: 1, label: "پرفیوم"}, {value: 2, label: "ادوپرفیوم"}, {
                                value: 3,
                                label: "ادوتویلت"
                            }]} isRtl={true}/>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <label htmlFor={"gender"} className={"font-bold"}>
                            جنسیت
                        </label>
                        <Select
                            styles={style}
                            className={"rounded-md border-2 !border-darkChocolate !outline-none"} name={"gender"}
                            id={"gender"}
                            placeholder={"انتخاب کنید"}
                            options={[{value: 1, label: "مردانه"}, {value: 2, label: "زنانه"}, {
                                value: 3,
                                label: "مردانه و زنانه"
                            },]} isRtl={true}/>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <label htmlFor={"season"} className={"font-bold"}>
                            فصل
                        </label>
                        <Select
                            styles={style}
                            className={"rounded-md border-2 !border-darkChocolate !outline-none"} name={"season"}
                            id={"season"}
                            isMulti={true}
                            placeholder={"انتخاب کنید"}
                            options={[{value: 1, label: "ساواج"}, {value: 2, label: "تام فورد"}, {
                                value: 3,
                                label: "لویی ویتون"
                            }]} isRtl={true}/>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <label htmlFor={"position"} className={"font-bold"}>
                            موقعیت
                        </label>
                        <Select
                            styles={style}
                            className={"rounded-md border-2 !border-darkChocolate !outline-none"} name={"position"}
                            id={"position"}
                            isMulti={true}
                            placeholder={"انتخاب کنید"}
                            options={[{value: 1, label: "125"}, {value: 2, label: "50"},
                                {value: 3, label: "100"}, {value: 4, label: "200"}, {value: 5, label: "250"},]}
                            isRtl={true}/>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <label htmlFor={"fragrance"} className={"font-bold"}>
                            رایحه
                        </label>
                        <Select
                            styles={style}
                            className={"rounded-md border-2 !border-darkChocolate !outline-none"} name={"fragrance"}
                            id={"fragrance"}
                            placeholder={"انتخاب کنید"}
                            isMulti={true}
                            options={[{value: 1, label: "پرفیوم"}, {value: 2, label: "ادوپرفیوم"}, {
                                value: 3,
                                label: "ادوتویلت"
                            }]} isRtl={true}/>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <label htmlFor={"inventory"} className={"font-bold"}>
                            تعداد موجودی
                        </label>
                        <Input className={"rounded-md border-2 border-darkChocolate p-1.5 appearance-none"}
                               name={"inventory"} id={"inventory"}/>
                    </div>
                </div>
            </div>
            <div className={"flex gap-5 flex-col"}>
                <div className={"flex flex-col gap-2"}>
                    <label htmlFor={"description"} className={"font-bold"}>
                        توضیح
                    </label>
                    <textarea className={"rounded-md border-2 border-darkChocolate px-2 py-1 appearance-none"}
                              name={"description"}
                              id={"description"}>

                    </textarea>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <label htmlFor={"images"} className={"font-bold"}>آپلود عکس محصول</label>
                    <div className={"rounded-md border-2 border-darkChocolate"}>
                        <FileUpload name={"images"} id={"images"}/>
                    </div>
                </div>
                <div className={"flex items-center gap-5 mt-auto self-end"}>
                    <Button className={"py-2 px-8 font-bold bg-secondary  rounded-md shadow shadow-black cursor-pointer"}
                            onClick={() => router.back()}
                            type={"button"}>
                        بازگشت
                    </Button>
                    <Button className={"py-2 px-8 font-bold bg-darkChocolate text-white rounded-md shadow shadow-black"}
                            type={"submit"}>
                        افزودن محصول
                    </Button>
                </div>
            </div>


        </form>
    );
}

export default ProductForm;