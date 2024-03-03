import React, { useEffect, useState } from "react";

interface breadcrumbProps {
    path: string[];
}

function Breadcrumb({ path }: breadcrumbProps) {

    const [breadcrumb, setBreadcrumb] = useState<string[]>([]);

    useEffect(() => {
        setBreadcrumb(path);
    }, [path])

    return (
        <>
            <ul className="breadcrumbList">
                {
                    breadcrumb.map((crumb, key) => (
                        <li key={key} className="breadcrumbItem">
                            {crumb}
                        </li>
                    ))
                }
            </ul>
        </>
    )

}

export default Breadcrumb