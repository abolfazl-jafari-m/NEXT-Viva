import React, {InputHTMLAttributes} from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    className: string,
    name ?: string
}

function Input({className, name, ...res}: IProps) {
    return (
        <input className={className} name={name} {...res}/>
    );
}

export default Input;