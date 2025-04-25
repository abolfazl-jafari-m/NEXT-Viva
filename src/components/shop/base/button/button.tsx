import React, {ButtonHTMLAttributes, ReactNode} from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    type?: 'button' | 'submit' | "reset" | undefined;
    children?: ReactNode;
}

function Button({className, type, children ,...res}: IProps) {
    return (
        <button className={className} type={type} {...res}>
            {children}
        </button>
    );
}

export default Button;