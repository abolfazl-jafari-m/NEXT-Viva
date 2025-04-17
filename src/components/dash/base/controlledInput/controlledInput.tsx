import React from 'react';
import {Control, Controller, FieldError, RegisterOptions} from "react-hook-form";
import Input from "@/components/dash/base/input/input";
import {ProductsForm} from "@/interfaces/interfaces";

interface Props {
    label: string;
    control: Control<ProductsForm, any, ProductsForm>
    name: any
    error?: FieldError | undefined ;
    rules ?:  Omit<RegisterOptions<ProductsForm, any>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"> | undefined;
    placeholder?: string | undefined;
}

function ControlledInput({label, control, name, error, rules ,placeholder}: Props) {
    return (
        <div className={"flex flex-col gap-2"}>
            <label htmlFor={name} className={"font-bold"}>
                {label}
            </label>
            <Controller
                render={({field}) =>
                    <Input
                        className={`rounded-md border-2 outline-none  px-2 py-1 ${error ? "border-red-700" : "border-darkChocolate"}`}
                        id={name} {...field} placeholder={placeholder}/>}
                name={name}
                control={control}
                rules={rules}
            />
        </div>
    );
}

export default ControlledInput;