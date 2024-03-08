import { Link } from "react-router-dom"
import Title from "./Title"
import React, { useState } from "react"

function Nav() {

    const [toggle, setToggle] = useState(false);

    const toggleHandler = () => {
        setToggle(!toggle)
    }

    return (

        <nav>
            <ul className="depth1">
                <li>

                    <Title level={2}>
                        <Link to=""
                            onClick={toggleHandler}
                        >
                            depth1
                        </Link>
                    </Title>

                    <ul
                        className={`depth2 ${toggle === true ? "active" : ''}`}
                    >
                        <li>

                            <Title level={3}>
                                <Link to="">
                                    depth2
                                </Link>
                            </Title>

                        </li>
                    </ul>
                </li>

                <li>

                    <Title level={2}>
                        <Link to=""
                            onClick={toggleHandler}
                        >
                            depth1
                        </Link>
                    </Title>

                    <ul
                        className={`depth2 ${toggle === true ? "active" : ''}`}
                    >
                        <li>

                            <Title level={3}>
                                <Link to="">
                                    depth2
                                </Link>
                            </Title>

                        </li>
                    </ul>
                </li>

                <li>

                    <Title level={2}>
                        <Link to=""
                            onClick={toggleHandler}
                        >
                            depth1
                        </Link>
                    </Title>

                    <ul
                        className={`depth2 ${toggle === true ? "active" : ''}`}
                    >
                        <li>

                            <Title level={3}>
                                <Link to="">
                                    depth2
                                </Link>
                            </Title>

                        </li>
                    </ul>
                </li>
            </ul>
        </nav >

    )

}

export default Nav