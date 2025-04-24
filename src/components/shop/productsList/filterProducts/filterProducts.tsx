"use client"
import React, {useEffect, useState} from 'react';
import {Accordion, AccordionItem, Checkbox, CheckboxGroup} from "@heroui/react";
import {BsGenderMale} from "react-icons/bs";

import {GiDelicatePerfume} from "react-icons/gi";
import {FaFilter, FaWeightScale} from "react-icons/fa6";
import {useRouter, useSearchParams} from "next/navigation";
import {useTranslations} from "next-intl";


function FilterProducts() {
    const t = useTranslations("products-page");
    const searchParams = useSearchParams();
    const router = useRouter();
    const params = new URLSearchParams(searchParams);
    const [volume, setVolume] = useState<string[]>([]);
    const [gender, setGender] = useState<string[]>([]);
    const [fragrance, setFragrance] = useState<string[]>([]);

    const updateSearchParams = (key: string, value: string[]) => {
        params.delete("page");
        if (value.length <= 0) {
            params.delete(key);
        } else if (value.length >= 1) {
            if (params.has(key)) {
                params.delete(key);
                value.map((item) => params.append(key, item))
            } else {
                value.map((item) => params.append(key, item))
            }
        }
        router.push(`products?${params.toString()}`);
    }
    useEffect(() => {
        setVolume(params.getAll("volume"));
        setGender(params.getAll("gender"));
        setFragrance(params.getAll("fragrance"));
    }, [searchParams.size]);

    return (
        <div
            className={"flex sticky max-md:static top-10 left-10  flex-col gap-5 max-md:gap-3 col-span-3 max-xl:col-span-4 max-md:col-span-full max-md:row-start-1  p-8 max-xl:p-4 bg-primary rounded-lg shadow-xl shadow-black h-fit"}>
            <div className={"flex items-center  gap-2"}>
                <FaFilter color={"white"} size={"20"}/>
                <h3 className={"text-2xl font-bold text-white max-md:text-lg"}>{t("filterProducts")}</h3>
            </div>
            <Accordion itemClasses={{title: "text-white  text-lg cursor-pointer max-sm:text-sm"}}>
                <AccordionItem key="volume" indicator={<FaWeightScale color={"gold"} className={"rotate-180"}/>}
                               title={t("volume")}>
                    <CheckboxGroup color={"warning"} value={volume}
                                   onChange={(value) => updateSearchParams("volume", value)}
                                   onValueChange={setVolume}>
                        <Checkbox classNames={{label: "text-white max-sm:text-sm"}} value={"50"}>50</Checkbox>
                        <Checkbox classNames={{label: "text-white max-sm:text-sm"}} value={"75"}>75</Checkbox>
                        <Checkbox classNames={{label: "text-white max-sm:text-sm"}} value={"100"}>100</Checkbox>
                        <Checkbox classNames={{label: "text-white max-sm:text-sm"}} value={"125"}>125</Checkbox>
                        <Checkbox classNames={{label: "text-white max-sm:text-sm"}} value={"200"}>200</Checkbox>
                    </CheckboxGroup>
                </AccordionItem>
                <AccordionItem key="gender" indicator={<BsGenderMale color={"gold"}/>} title={t("gender")}>
                    <CheckboxGroup color={"warning"} value={gender} onValueChange={setGender}
                                   onChange={(value) => updateSearchParams("gender", value)}>
                        <Checkbox classNames={{label: "text-white max-sm:text-sm"}} value={"آقایان"}>{t("mens")}</Checkbox>
                        <Checkbox classNames={{label: "text-white max-sm:text-sm"}} value={"خانم‌ها"}>{t("women")}</Checkbox>
                        <Checkbox classNames={{label: "text-white max-sm:text-sm"}} value={"یونسکس"}>{t("unisex")}</Checkbox>
                    </CheckboxGroup>
                </AccordionItem>
                {/*<AccordionItem key="price" indicator={<IoPricetags color={"gold"}/>} title={t("price")}>*/}
                {/*    <Slider*/}
                {/*        classNames={{label: "m-2 text-white", base: "text-white"}}*/}
                {/*        dir={"ltr"}*/}
                {/*        className={"w-full p-1"}*/}
                {/*        defaultValue={[1000000, 5000000]}*/}
                {/*        color={"warning"}*/}
                {/*        formatOptions={{style: "currency", currency: "IRR"}}*/}
                {/*        label={t("price-range")}*/}
                {/*        maxValue={20000000}*/}
                {/*        minValue={0}*/}
                {/*        step={1000000}*/}
                {/*        showOutline={true}*/}
                {/*        showTooltip={true}*/}
                {/*    />*/}
                {/*</AccordionItem>*/}
                <AccordionItem key="fragrance" title={t("fragrance")}
                               indicator={<GiDelicatePerfume color={"gold"} className={"rotate-180"}/>}>
                    <CheckboxGroup color={"warning"} value={fragrance} onValueChange={setFragrance}
                                   onChange={(value) => updateSearchParams("fragrance", value)}>
                        <Checkbox classNames={{label: "text-white max-sm:text-sm"}} value={t("cool")}>{t("cool")}</Checkbox>
                        <Checkbox classNames={{label: "text-white max-sm:text-sm"}} value={t("warm")}>{t("warm")}</Checkbox>
                        <Checkbox classNames={{label: "text-white max-sm:text-sm"}} value={t("sweet")}>{t("sweet")}</Checkbox>
                        <Checkbox classNames={{label: "text-white max-sm:text-sm"}} value={t("bitter")}>{t("bitter")}</Checkbox>
                    </CheckboxGroup>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default FilterProducts;