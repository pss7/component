import React, { useState } from "react";
import { Link } from "react-router-dom";

interface tabProps {
    tabData: Array<any>;
}

function Tab({ tabData }: tabProps) {

    const [tabMenu, setTab] = useState(0);

    return (

        <div className="tabListWrap">

            <ul className="tabList">
                {
                    tabData.map((tab, key) => (
                        <li key={key} >
                            <Link className={tabMenu === tab.id ? 'active' : ''} to="#" onClick={() => {
                                setTab(tab.id)
                            }}>
                                {tab.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <div className="tabContentWrap">
                {
                    tabData.filter(tabData => tabMenu === tabData.id).map((tab, key) => (
                        <div className='tabcontent' key={key}>
                            {tab.description}
                        </div>
                    ))
                }
            </div>

        </div>

    )

}

export default Tab