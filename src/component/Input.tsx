import React from "react";

interface InputProps {
    label: string;
    type: React.HTMLInputTypeAttribute;
    placeholder?: string;
    name: string;
    id: string;
    blind?: string;
}

function Input({ id, label, name, type, placeholder, blind }: InputProps) {

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input name={name} id={id} type={type} placeholder={placeholder} className={blind} />
        </>
    )

}

export default Input