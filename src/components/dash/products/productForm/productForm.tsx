"use client"
import React, {useState} from 'react';

import FileUpload from "@/components/dash/base/fileUpload/fileUpload";
import Button from "@/components/dash/base/button/button";
import {useRouter} from "next/navigation";
import {brands, concentration, fragrances, genders, positions, seasons, volumes} from "@/constants/productsForm";
import {SubmitHandler, useForm} from "react-hook-form";
import {useTranslations} from "next-intl";
import ControlledInput from "@/components/dash/base/controlledInput/controlledInput";
import ControlledSelectBox from "@/components/dash/base/controlledSelecBox/controlledSelectBox";
import {Product, ProductsForm} from "@/interfaces/interfaces";
import {onlyNumbers, yearRegex} from "@/constants/regex";



function ProductForm() {
    const t = useTranslations("productForm");
    const [images, setImages] = useState<string[]>([]);
    const {handleSubmit, formState: {errors}, control, register} = useForm<ProductsForm>({
        defaultValues: {
            title: "",
            shortDes: "",
            price: "",
            releaseYear: "",
            // brand: {},
            volume: [],
            // concentration: {},
            // gender: {},
            seasons: [],
            positions: [],
            fragrance: [],
            inventory: "",
            description: "",
            images: []
        }
    })

    const handleAddProduct: SubmitHandler<ProductsForm> = (data) => {
        const {title , shortDes , price, seasons, concentration, fragrance, brand, releaseYear , inventory ,description, gender ,volume , positions} = data
        const product :Omit<Product , "createdAt" | "id" | "slug" | "comments"> = {
            title : title,
            shortDes : shortDes,
            price : price,
            season : seasons.map((item)=>item.label),
            volume : volume.map((item)=>item.label),
            position : positions.map((item)=>item.label),
            inventory : inventory,
            description: description,
            gender: gender.label,
            concentration: concentration.label,
            fragrance: fragrance.map(item=>item.label),
            brand : brand.label,
            releaseYear: releaseYear,
            images : images,
        };
        console.log(product);
    }
    const router = useRouter();
    return (
        <form className={"grid grid-cols-2 gap-10 w-full  max-md:grid-cols-1"}
              onSubmit={handleSubmit(handleAddProduct)}>
            <div className={"flex flex-col gap-4"}>
                <ControlledInput label={t("title")} control={control} name={"title"} error={errors.title} rules={{required : true}} placeholder={t("titlePlaceholder")}/>
                <ControlledInput label={t("shortDes")} control={control} name={"shortDes"} error={errors.shortDes} rules={{required : true}} placeholder={t("shortPlaceholder")}/>
                <div className={"grid grid-cols-2 max-xs:grid-cols-1 gap-5 w-full"}>
                    <ControlledInput label={t("price")} control={control} name={"price"} error={errors.price} rules={{required : true, pattern : onlyNumbers}} placeholder={t("pricePlaceholder")}/>
                    <ControlledInput label={t("releaseYear")} control={control} name={"releaseYear"} error={errors.releaseYear} rules={{required : true, pattern :yearRegex}} placeholder={t("yearPlaceholder")}/>
                    <ControlledSelectBox options={brands} control={control} placeholder={t("selectBoxPlaceholder")} name={"brand"}
                                         label={t("brand")} isRtl={true}  error={errors.brand} rules={{required : true}}/>
                    <ControlledSelectBox options={volumes} control={control} placeholder={t("selectBoxPlaceholder")} name={"volume"}
                                         label={t("volume")} isRtl={true} isMulti={true}  error={errors.volume} rules={{required : true}} />
                    <ControlledSelectBox options={concentration} control={control} placeholder={t("selectBoxPlaceholder")}
                                         name={"concentration"} label={t("concentration")} isRtl={true}
                                         isMulti={false}  error={errors.concentration} rules={{required : true}}/>
                    <ControlledSelectBox options={genders} control={control} placeholder={t("selectBoxPlaceholder")} name={"gender"}
                                         label={t("gender")} isRtl={true} isMulti={false}  error={errors.gender} rules={{required : true}}/>
                    <ControlledSelectBox options={seasons} control={control} placeholder={t("selectBoxPlaceholder")}
                                         name={"seasons"} label={t("seasons")} isRtl={true} isMulti={true}  error={errors.seasons} rules={{required : true}}/>
                    <ControlledSelectBox options={positions} control={control} placeholder={t("selectBoxPlaceholder")}
                                         name={"positions"} label={t("positions")} isRtl={true} isMulti={true}  error={errors.positions} rules={{required : true}}/>
                    <ControlledSelectBox options={fragrances} control={control} placeholder={t("selectBoxPlaceholder")}
                                         name={"fragrance"} label={t("fragrance")} isRtl={true} isMulti={true}  error={errors.fragrance} rules={{required : true}}/>
                    <ControlledInput label={t("inventory")} control={control} name={"inventory"} placeholder={t("inventoryPlaceholder")}  error={errors.inventory} rules={{required : true , pattern : onlyNumbers}}/>
                </div>
            </div>
            <div className={"flex gap-5 flex-col"}>
                <div className={"flex flex-col gap-2"}>
                    <label htmlFor={"description"} className={"font-bold"}>
                        {t("description")}
                    </label>
                    <textarea {...register("description", {required : true})} placeholder={t("desPlaceholder")}
                              className={`rounded-md border-2  px-2 py-1 outline-none appearance-none ${errors.description ? "border-red-700" : "border-darkChocolate"}`}
                              id={"description"}>
                    </textarea>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <label htmlFor={"images"} className={"font-bold"}>{t("imagesUpload")}</label>
                    <div className={"rounded-md border-2 border-darkChocolate"}>
                        <FileUpload values={images} setValues={setImages}/>
                    </div>
                </div>
                <div className={"flex items-center gap-5 mt-auto self-end max-md:self-center"}>
                    <Button
                        className={"py-2 px-8 font-bold bg-secondary  rounded-md shadow shadow-black cursor-pointer max-md:px-6 max-md:text-sm"}
                        onClick={() => router.back()}
                        type={"button"}>
                        {t("back")}
                    </Button>
                    <Button
                        className={"py-2 px-8 font-bold bg-darkChocolate text-white rounded-md shadow shadow-black max-md:px-6 max-md:text-sm"}
                        type={"submit"}>
                        {t("save")}
                    </Button>
                </div>
            </div>
        </form>
    );
}

export default ProductForm;