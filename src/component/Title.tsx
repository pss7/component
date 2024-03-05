import React from "react";


interface titleProps {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
}

function Title({ h1, h2, h3, h4, h5, h6 }: titleProps) {

    return (
        <>
            <h1>{h1}</h1>
            <h2>{h1}</h2>
            <h3>{h1}</h3>
            <h4>{h1}</h4>
            <h5>{h1}</h5>
            <h6>{h1}</h6>
        </>
    )

}

export default Title