import React, { TextareaHTMLAttributes} from 'react';
interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder: string;
    error ?: string
    containerClassName ?: string
}
function TextArea({placeholder, error , containerClassName, ...res}: IProps) {
    return (
        <div className={containerClassName} >
            <div className={`rounded-md border ${!error ? "border-secondary": "border-red-400"} `}>
                    <textarea draggable={false} rows={5} {...res}
                              className={"w-full h-full px-5 py-2 text-white placeholder:text-white/60 outline-none font-light"}
                              placeholder={placeholder}
                    ></textarea>
            </div>
            <div className={"min-h-5"}>

                {error && <p className={"text-sm text-red-400 font-light"}>{error}</p>}
            </div>

        </div>
    );
}

export default TextArea;