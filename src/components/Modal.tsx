import React, { useState } from 'react';
import Button from "./Button";
import WidgetsIcon from '@mui/icons-material/Widgets';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Button onClick={toggle}>
                <WidgetsIcon></WidgetsIcon>
            </Button>
        </>
    );
};

export default Modal;