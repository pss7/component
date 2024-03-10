import React from "react";

interface SelectProps {
    id?: string;
    name?: string;
    option?: Array<any>;
    value?: string;
    blind?: string;
    className?: string;
}

function Select({ className, value, option, id, name, blind }: SelectProps) {

    return (
        <>
            <label
                htmlFor={id}
                className={blind}></label>
            <select
                className={className}
                name={name}
                id={id}>
                <option value={value}>111</option>
                <option value={value}>222</option>
                <option value={value}>333</option>
                {/* {
                    option.map((option, key) => (
                        <option
                            key={key}
                            value={option.value}
                        >
                            {option.name}
                        </option>
                    ))
                } */}
            </select>
        </>
    )

}

export default Select