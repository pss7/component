import React from "react";

interface InputProps {
    label?: string;
    type: React.HTMLInputTypeAttribute;
    placeholder?: string;
    name?: string;
    id?: string;
    blind?: string;
    className?: string;
    value?: string;
    autocomplete?: string;
}

function Input({ id, label, name, type, placeholder, className, blind, value, autocomplete }: InputProps) {

    return (
        <>
            <label htmlFor={id} className={blind}>{label}</label>
            <input
                className={className}
                name={name}
                id={id}
                type={type}
                placeholder={placeholder}
            />
        </>
    )

}

export default Input