import React from "react";
import { ReactNode } from 'react';

interface buttonProps {
    onClick?: () => void;
    disabled?: boolean;
    text?: string;
    children?: ReactNode;
}

function Button({ children, onClick, disabled, text }: buttonProps) {

    return (
        <>
            <button className="button" onClick={onClick} disabled={disabled}>
                {children}
                {text}
            </button>
        </>
    )

}

export default Button