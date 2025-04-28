import React, {ReactNode, SelectHTMLAttributes} from 'react';

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string,
    icon: ReactNode,
    options: Option[],
    id :string
}

interface Option {
    value: string,
    label: string
}

function SelectBox({label, options, icon, id, ...res}: IProps) {
    return (
        <div className={"flex items-center gap-2"}>
            <label className={"font-semibold max-lg:text-sm text-nowrap"} htmlFor={id}>{label} :</label>
            <div className={"bg-secondary rounded-lg relative cursor-pointer px-8 max-md:px-5 py-1"}>
                <select
                    {...res}
                    className={"appearance-none w-full h-full outline-none border-none  text-sm  text-center bg-secondary pl-4 block"}>
                    {options.map((option: Option) => <option key={option.value}
                                                             value={option.value}>{option.label}</option>)}
                </select>
                <div className={"absolute top-1/2 -translate-y-1/2 left-2  "}>
                    {icon}
                </div>
            </div>
        </div>
    );
}

export default SelectBox;