import React from 'react';
import {Link} from "react-router-dom";
import "./switch.scss";
import {newsData, articlesData} from "../../data/publicationsData";

const Switch = ({isActive, setActive, switch1, switch2}) => {
    return (
        <div className="switch">
            <Link onClick={(event) => setActive(newsData)}
                  className={isActive.name === switch1 ? "switch__link switch__link_active" : "switch__link"}
                  to="">{switch1}</Link>
            <Link onClick={(event) => setActive(articlesData)}
                  className={isActive.name === switch2 ? "switch__link switch__link_active" : "switch__link"}
                  to="">{switch2}</Link>
        </div>
    );
};

export default Switch;