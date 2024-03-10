
import { ReactNode } from 'react';

interface boxProps {

    children: ReactNode;
    className: string;


}

function Box({ className, children }: boxProps) {

    return (

        <div className={className}>
            {children}
        </div>

    )

}

export default Box