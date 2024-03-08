import React, { useState } from "react";
import WidgetsIcon from '@mui/icons-material/Widgets';
import Button from "./Button";
import Title from "./Title";
import { ReactNode } from 'react';

interface DrawerProps {

    children?: ReactNode;

}

function Drawer({ children }: DrawerProps) {

    const [toggle, setToogle] = useState(false);

    const toggleHandler = () => {
        setToogle(!toggle);
    }

    return (

        <div className="menuWrap">
            <Button onClick={toggleHandler}>
                <WidgetsIcon style={{ fill: '#fff' }}></WidgetsIcon>
            </Button>
            <div className={`menuBox ${toggle === false ? "active" : ""}`}>
                {children}
            </div>
        </div>

    )

}

export default Drawer