import React, {InputHTMLAttributes, ReactNode} from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    children: ReactNode;

}
function RadioButton({children , ...res}: IProps) {
    return (
        <div
            className={"relative border-2 border-white has-checked:bg-darkChocolate w-full h-full rounded-md has-checked:border-gold py-2 px-8 w-fit hover:bg-darkChocolate cursor-pointer"}>
            <span className={"text-white font-light text-nowrap cursor-pointer"}>{children}</span>
            <input type={"radio"} {...res}
                   className={"appearance-none absolute w-full h-full top-0 left-0 z-10 cursor-pointer"}/>
        </div>
    );
}

export default RadioButton;