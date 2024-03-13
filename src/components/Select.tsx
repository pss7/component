import React, { useState } from "react";

interface SelectProps {
    id?: string;
    name?: string;
    data?: Array<any>;
    value?: string;
    blind?: string;
    className?: string;
    disabled?: boolean;
}

function Select({ disabled, className, value, id, name, blind }: SelectProps) {

    const [select, setSelect] = useState('');

    const handleChange = (e: any) => {
        setSelect(e.target.value)
        console.log(e.target.value)
    }

    const data = [
        {
            label: 'label1',
            value: 'option1'
        },
        {
            label: 'label2',
            value: 'option2'
        },
        {
            label: 'label3',
            value: 'option3'
        },
        {
            label: 'label4',
            value: 'option4'
        }
    ]

    return (
        <>
            <label
                htmlFor={id}
                className={blind}></label>
            <select
                className={className}
                name={name}
                id={id}
                onChange={handleChange}
            >
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