import React from "react";

interface buttonProps {
    onClick: () => void;
    disabled: boolean;
    text: string;
}

function Button({ onClick, disabled, text }: buttonProps) {

    return (
        <>
            <button className="button" onClick={onClick} disabled={disabled}>
                {text}
            </button>
        </>
    )

}

export default Button