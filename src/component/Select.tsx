import React from "react";

interface SelectProps {
    id: string;
    name: string;
    option: Array<any>;
    value: string;
    blind?: string;
}

function Select({ value, option, id, name, blind }: SelectProps) {

    return (
        <>
            <label
                htmlFor={id}
                className={blind}></label>
            <select
                name={name}
                id={id}>
                {
                    option.map((option, key) => (
                        <option
                            key={key}
                            value={option.value}
                        >
                            {option.name}
                        </option>
                    ))
                }
            </select>
        </>
    )

}

export default Select