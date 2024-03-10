import { ReactNode } from 'react';

interface buttonProps {
    onClick?: () => void;
    disabled?: boolean;
    text?: string;
    children?: ReactNode;
    type?: "submit" | "reset" | "button" | undefined;
    title?:string;
    className?:string;
}

function Button({ className, title, type, children, onClick, disabled, text }: buttonProps) {

    return (
        <>
            <button title={title} type={type} className={className} onClick={onClick} disabled={disabled}>
                {children}
                {text}
            </button>
        </>
    )

}

export default Button