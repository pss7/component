

import { ReactNode } from 'react';
import Title from './Title';

interface modalToggle {

    modalToggle: boolean;
    children?: ReactNode;

}

const Modal = ({ modalToggle, children }: modalToggle) => {

    return (
        <div className={`modalWrap ${modalToggle === false ? "" : "active"} `}>
            <Title level={3} text="Modal" />
            {children}
        </div>
    );
};

export default Modal;