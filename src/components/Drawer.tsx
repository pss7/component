import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface DrawerProps {

    children?: ReactNode;
    toggle: boolean;

}

function Drawer({ toggle, children }: DrawerProps) {

    return (

        <div className={`menuWrap ${toggle === false ? "" : "active"} `}>
            <div className="menuBox">
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