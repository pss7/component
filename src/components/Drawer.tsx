import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface DrawerProps {

    children?: ReactNode;
    drawerToggle: boolean;

}

function Drawer({ drawerToggle, children }: DrawerProps) {

    return (

        <div className={`menuWrap ${drawerToggle === false ? "" : "active"} `}>
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
                    <li>
                        <Link to="/modalComponent">
                            ModalComponent
                        </Link>
                    </li>
                    <li>
                        <Link to="/paginationComponent">
                            PaginationComponent
                        </Link>
                    </li>
                </ul>

            </div>
        </div>

    )

}

export default Drawer