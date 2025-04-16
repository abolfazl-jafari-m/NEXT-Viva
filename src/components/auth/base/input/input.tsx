import React, {InputHTMLAttributes} from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    error ?: string
}

function Input({error, placeholder,...res}: IProps) {
    return (
        <div className={"flex flex-col gap-2"} >
            <div className={`rounded-md border ${!error ? "border-secondary": "border-red-400"} `}>
                <input type={"text"} {...res}
                       className={`w-full h-full px-6.5 py-3 text-white placeholder:text-white/60 outline-none font-light`}
                       placeholder={placeholder}
                />
            </div>
            <div className={"min-h-5"}>
                {error && <p className={"text-sm text-red-400 font-light"}>{error}</p>}
            </div>
        </div>
    );
}

export default Input;