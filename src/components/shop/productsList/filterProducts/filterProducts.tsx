"use client"
import React from 'react';
import {Accordion, AccordionItem, Checkbox, CheckboxGroup, Slider} from "@heroui/react";
import {BsGenderMale} from "react-icons/bs";
import {IoPricetags} from "react-icons/io5";
import {GiDelicatePerfume} from "react-icons/gi";
import {FaFilter, FaWeightScale} from "react-icons/fa6";


function FilterProducts() {
    return (
        <div className={"flex sticky top-10 left-10  flex-col gap-5 col-span-3 p-8 bg-primary rounded-lg shadow-xl shadow-black h-fit"}>
            <div className={"flex items-center  gap-2"}>
                <FaFilter color={"white"} size={"20"} />
                <h3 className={"text-2xl font-bold text-white"}>فیلتر محصولات</h3>
            </div>
            <Accordion itemClasses={{title: "text-white  text-lg cursor-pointer"}} >
                <AccordionItem key="volume" indicator={<FaWeightScale color={"gold"} className={"rotate-180"}/>}
                               title="حجم">
                    <CheckboxGroup color={"warning"}>
                        <Checkbox classNames={{label: "text-white"}} value={"50"}>50</Checkbox>
                        <Checkbox classNames={{label: "text-white"}} value={"75"}>75</Checkbox>
                        <Checkbox classNames={{label: "text-white"}} value={"100"}>100</Checkbox>
                        <Checkbox classNames={{label: "text-white"}} value={"125"}>125</Checkbox>
                        <Checkbox classNames={{label: "text-white"}} value={"200"}>200</Checkbox>
                    </CheckboxGroup>
                </AccordionItem>
                <AccordionItem key="gender" indicator={<BsGenderMale color={"gold"}/>} title="جنسیت">
                    <CheckboxGroup color={"warning"}>
                        <Checkbox classNames={{label: "text-white"}} value={"مردانه"}>مردانه</Checkbox>
                        <Checkbox classNames={{label: "text-white"}} value={"زنانه"}>زنانه</Checkbox>
                        <Checkbox classNames={{label: "text-white"}} value={"یونیسکس"}>یونیسکس</Checkbox>
                    </CheckboxGroup>
                </AccordionItem>
                <AccordionItem key="price" indicator={<IoPricetags color={"gold"}/>} title="قیمت">
                    <Slider
                        classNames={{label: "m-2 text-white" , base: "text-white"}}
                        dir={"ltr"}
                        className={"w-full p-1"}
                        defaultValue={[1000000, 5000000]}
                        color={"warning"}
                        formatOptions={{style: "currency", currency: "IRR"}}
                        label="رنج قیمت"
                        maxValue={20000000}
                        minValue={0}
                        step={1000000}
                        showOutline={true}
                        showTooltip={true}
                    />
                </AccordionItem>
                <AccordionItem key="fragrance" title="رایحه"
                               indicator={<GiDelicatePerfume color={"gold"} className={"rotate-180"}/>}>
                    <CheckboxGroup color={"warning"} >
                        <Checkbox classNames={{label: "text-white"}} value={"خنک"}>خنک</Checkbox>
                        <Checkbox classNames={{label: "text-white"}} value={"گرم"}>گرم</Checkbox>
                        <Checkbox classNames={{label: "text-white"}} value={"شیرین"}>شیرین</Checkbox>
                        <Checkbox classNames={{label: "text-white"}} value={"تلخ"}>تلخ</Checkbox>
                    </CheckboxGroup>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default FilterProducts;