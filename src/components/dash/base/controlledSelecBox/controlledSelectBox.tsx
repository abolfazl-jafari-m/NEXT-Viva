import React from 'react';
import {Control, Controller, FieldError, FieldErrorsImpl, Merge, RegisterOptions} from "react-hook-form";
import Select, {CSSObjectWithLabel} from "react-select";
import {ProductsForm} from "@/interfaces/interfaces";


interface IProps {
    options: { value: number, label: string }[];
    control: Control<ProductsForm, any, ProductsForm>;
    placeholder: string;
    isRtl?: boolean;
    isMulti?: boolean;
    name: any;
    label: string;
    error?: Merge<FieldError, FieldErrorsImpl<{ label: string; value: number; }>> | undefined
    rules?: Omit<RegisterOptions<ProductsForm, any>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"> | undefined
}


function ControlledSelectBox({options, control, placeholder, isRtl, isMulti, name, label, error, rules}: IProps) {
    const style = {
        control: (base: CSSObjectWithLabel) => ({...base, border: 0, boxShadow: "none"}),
    }
    return (
        <div className={"flex flex-col gap-2"}>
            <label htmlFor={name} className={"font-bold"}>
                {label}
            </label>
            <Controller render={({field}) =>
                <Select
                    {...field}
                    styles={style}
                    className={`rounded-md border-2 !outline-none ${error ? "!border-red-700 " : "!border-darkChocolate"}`}
                    placeholder={placeholder}
                    options={options}
                    isRtl={isRtl}
                    isMulti={isMulti}
                    id={name}
                />} name={name} control={control} rules={rules}/>
        </div>
    );
}

export default ControlledSelectBox;