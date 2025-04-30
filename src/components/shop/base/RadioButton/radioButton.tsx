import React, {InputHTMLAttributes, ReactNode} from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    children: ReactNode;

}
function RadioButton({children , ...res}: IProps) {
    return (
        <div
            className={"relative text-white light:text-black light:has-checked:text-white border-2 border-white light:border-black has-checked:bg-darkChocolate w-full h-full rounded-md has-checked:border-gold py-2 px-8 max-lg:px-6 max-md:px-4 max-md:py-1 max-sm:text-sm w-fit hover:bg-darkChocolate light:hover:text-white cursor-pointer"}>
            <span className={" font-light text-nowrap cursor-pointer"}>{children}</span>
            <input type={"radio"} {...res}
                   className={"appearance-none absolute w-full h-full top-0 left-0 z-10 cursor-pointer "}/>
        </div>
    );
}

export default RadioButton;