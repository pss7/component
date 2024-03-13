import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from "./Button";
import WidgetsIcon from '@mui/icons-material/Widgets';

interface DrawerProps {

    children?: ReactNode;
    isOpen?: boolean;

}

function Drawer({ children }: DrawerProps) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div className={`menuWrap ${isOpen === true ? "" : "active"} `}>
            <div className="menuBox">
                <Button onClick={toggle}>
                    <WidgetsIcon></WidgetsIcon>
                </Button>

                {children}

                <ul className="listWrap">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/titlecomponent">
                            TitleComponent
                        </Link>
                    </li>
                    <li>
                        <Link to="/buttoncomponent">
                            ButtonComponent
                        </Link>
                    </li>
                    <li>
                        <Link to="/inputcomponent">
                            InputComponent
                        </Link>
                    </li>
                    <li>
                        <Link to="/selectcomponent">
                            SelectComponent
                        </Link>
                    </li>
                    <li>
                        <Link to="/tableComponent">
                            TableComponent
                        </Link>
                    </li>
                    <li>
                        <Link to="/tabComponent">
                            TabComponent
                        </Link>
                    </li>
                </ul>

            </div>
        </div>

    )

}

export default Drawer