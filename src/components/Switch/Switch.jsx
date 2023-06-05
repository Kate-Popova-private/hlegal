import React from 'react';
import {Link} from "react-router-dom";
import "./switch.scss";

const Switch = ({isActive, setActive, switch1, switch2}) => {
    return (
        <div className="switch">
            <Link onClick={(event) => setActive(event.target.innerHTML)}
                  className={isActive === switch1 ? "switch__link switch__link_active" : "switch__link"}
                  to="">{switch1}</Link>
            <Link onClick={(event) => setActive(event.target.innerHTML)}
                  className={isActive === switch2 ? "switch__link switch__link_active" : "switch__link"}
                  to="">{switch2}</Link>
        </div>
    );
};

export default Switch;