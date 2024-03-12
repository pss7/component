import React from "react";

interface SelectProps {
    id?: string;
    name?: string;
    data?: Array<any>;
    value?: string;
    blind?: string;
    className?: string;
    disabled?: boolean;
}

function Select({ disabled, className, value, data, id, name, blind }: SelectProps) {

    return (
        <>
            <label
                htmlFor={id}
                className={blind}></label>
            <select
                className={className}
                name={name}
                id={id}>
                {
                    data.map((data, key) => (
                        <option
                            key={key}
                            value={data.value}
                        >
                            {data.label}
                        </option>
                    ))
                }
                {/* <option value={value}>111</option>
                <option value={value}>222</option>
                <option value={value}>333</option> */}
            </select>
        </>
    )

}

export default Select