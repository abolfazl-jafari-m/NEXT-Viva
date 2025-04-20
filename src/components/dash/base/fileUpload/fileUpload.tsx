"use client"
import React, {ChangeEvent, useRef, useState} from 'react';
import {uploadImage} from "@/services/upload";
import {CgClose} from "react-icons/cg";
import {BarLoader} from "react-spinners";
import {useTranslations} from "next-intl";
import toast from "react-hot-toast";

interface IProps {
    // id: string;
    // name: string;
    values: string[];
    setValues: React.Dispatch<React.SetStateAction<string[]>>;
}

function FileUpload({values, setValues}: IProps
) {
    const t = useTranslations("productForm")
    const [image, setImage] = useState<string | ArrayBuffer | null>(null);
    const [loading, setLoading] = useState<boolean>(false)
    // const [values, setValues] = useState<string[]>([]);
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
            setLoading(true);
            const file = inputRef.current.files[0]
            const formData = new FormData();
            formData.append('image', file as File)
            uploadImage(formData).then((res) => {
                setValues(prevState => [...prevState, res.downloadLink]);
            }).catch((error) => {
                if (error.status === 500) {
                    toast.error(t("file-format-error"));
                } else {
                    toast.error(t("error-message"))
                }
            })
                .finally(() => {
                    setImage(null);
                    setLoading(false);
                })
        }
    }
    return (
        <div className={"bg-secondary flex flex-col  p-5 gap-5 overflow-hidden"}>
            {!loading ?
                (<>
                    <div className={"flex items-center justify-center gap-10 max-sm:flex-col"}>
                        <div
                            className={"rounded-md border-2 border-darkChocolate h-32 w-32 relative flex items-center justify-center"}>
                            {image ? (<><img src={image as string} alt={"image"} className={"w-full h-full"}/>
                                </>) :
                                <p className={"text-primary/70 text-sm font-semibold text-center"}>{t("imagePreview")}</p>}
                        </div>
                        <input type={"file"} hidden={true} ref={inputRef} onChange={handleUploadInput}/>
                        <div className={"flex flex-col gap-2"}>
                            {
                                !image ?
                                    (<><p className={"text-center"}>{t("uploadText")}</p>
                                        <button type={"button"}
                                                className={"bg-primary text-white px-8 py-2 rounded-md shadow shadow-black cursor-pointer"}
                                                onClick={() => inputRef.current?.click()}>{t("upload")}
                                        </button>
                                    </>)
                                    : (<><p className={"font-semibold"}>از آپلود خود اطمینان دارید ؟</p>
                                        <div className={"flex items-center gap-2 justify-center"}>
                                            <button
                                                className={"bg-green-800 text-white text-sm px-8 py-1 rounded-md cursor-pointer"}
                                                type={"button"} onClick={() => handleUploadFile()}>بله
                                            </button>
                                            <button
                                                className={"bg-rose-800 text-white text-sm px-8 py-1 rounded-md cursor-pointer"}
                                                type={"button"} onClick={() => setImage(null)}>خیر
                                            </button>
                                        </div>
                                    </>)
                            }
                        </div>
                    </div>
                    {
                        values.length > 0 && (
                            <div className={"flex items-center gap-6"}>
                                {
                                    values.map((item, index) => (
                                        <div key={index} className={"w-20 h-20 rounded-md relative"}>
                                    <span
                                        className={"absolute rounded-full -top-1 -right-1 p-1 bg-primary text-white text-sm cursor-pointer "}
                                        onClick={() => setValues(prevState => prevState.filter(image => image !== item))}><CgClose/></span>
                                            <img src={`http://api.alikooshesh.ir:3000${item}`} alt={`image-${index}`}
                                                 className={"w-full h-full rounded-md"}/>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </>)
                :
                (<div className={"flex items-center justify-center"}><BarLoader
                    className={"bg-darkChocolate text-darkChocolate"}/></div>)
            }

        </div>
    );
}

export default FileUpload;