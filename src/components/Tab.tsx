import React, { useState } from "react";
import { Link } from "react-router-dom";

function Tab() {

    const tabData = [
        {
            id: 0,
            name: 'tab1',
            content: 'content1'
        },
        {
            id: 1,
            name: 'tab2',
            content: 'content2'
        },
        {
            id: 2,
            name: 'tab3',
            content: 'content3'
        },
    ]

    const [tabMenu, setTab] = useState(0);
    const tabClick = (index:number) => {
        setTab(index);
    }

    return (

        <div className="tabWrap">

            <ul className="tabListWrap">
                {
                    tabData.map((tabData, index) => (
                        <li key={index}>
                            <Link to=""  className={tabMenu === index ? "active" : ""} onClick={() => tabClick(index)}>
                                {tabData.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <div className="tabContentWrap">
                {tabData[tabMenu].content}
            </div>
        </div>

    )

}

export default Tab