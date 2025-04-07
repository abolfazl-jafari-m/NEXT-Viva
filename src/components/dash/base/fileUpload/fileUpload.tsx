"use client"
import React, {ChangeEvent, useRef, useState} from 'react';
import {uploadImage} from "@/services/upload";
import cartItems from "@/components/shop/cart/cartItems/cartItems";
import {CgClose} from "react-icons/cg";


function FileUpload({name, id}: { name: string, id: string }) {
    const [image, setImage] = useState<string | ArrayBuffer | null>(null);
    const [values, setValues] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const handleUploadInput = (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        if (e.target.files) {
            const file = e.target.files[0];
            if (file) reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
                setImage(reader.result)
            }

        }
    }

    const handleUploadFile = () => {
        if (inputRef.current && inputRef.current.files) {
            const file = inputRef.current.files[0]
            const formData = new FormData();
            formData.append('image', file as File)
            uploadImage(formData).then((res) => {
                setValues(prevState => [...prevState, res.downloadLink]);
                setImage(null);
            })
        }
    }
    return (
        <div className={"bg-secondary flex flex-col  p-10 gap-5 overflow-hidden"}>
            <div className={"flex items-center justify-center gap-10"}>
                <div
                    className={"rounded-md border-2 border-darkChocolate h-32 w-32 relative flex items-center justify-center"}>
                    {image ? (<><img src={image as string} alt={"image"} className={"w-full h-full"}/>
                        </>) :
                        <p className={"text-primary/70 text-sm font-semibold text-center"}>پیش نمایش عکس محصول</p>}
                </div>
                <input type={"file"} hidden={true} ref={inputRef} onChange={handleUploadInput}/>
                <input hidden={true} value={values} name={name} id={id} readOnly={true}/>
                <div className={"flex flex-col gap-2"}>
                    {
                        !image ?
                            (<><p>برای اپلود فایل روی دکمه زیر کلیک کنید</p>
                                <button type={"button"}
                                        className={"bg-primary text-white px-8 py-2 rounded-md shadow shadow-black cursor-pointer"}
                                        onClick={() => inputRef.current?.click()}>آپلود
                                </button>
                            </>)
                            : (<><p className={"font-semibold"}>از آپلود خود اطمینان دارید ؟</p>
                                <div className={"flex items-center gap-2 justify-center"}>
                                    <button
                                        className={"bg-green-800 text-white text-sm px-8 py-1 rounded-md cursor-pointer"}
                                        type={"button"} onClick={() => handleUploadFile()}>بله
                                    </button>
                                    <button className={"bg-rose-800 text-white text-sm px-8 py-1 rounded-md cursor-pointer"}
                                            type={"button"} onClick={() => setImage(null)}>خیر
                                    </button>
                                </div>
                            </>)
                    }
                </div>
            </div>
            {
                values.length > 0 && (
                    <div className={"flex items-center gap-3"}>
                        {
                            values.map((item, index) => (
                                <div key={index} className={"w-15 h-15 rounded-md relative"}>
                                    <span
                                        className={"absolute rounded-full -top-1 -right-1 p-1 bg-primary text-white text-sm cursor-pointer "}
                                        onClick={() => setValues(prevState => prevState.filter(image => image !== item))}><CgClose/></span>
                                    <img src={item} alt={`image-${index}`} className={"w-full h-full"}/>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
}

export default FileUpload;