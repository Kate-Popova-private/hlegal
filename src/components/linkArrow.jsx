import React from 'react';
import {NavLink} from "react-router-dom";

const LinkArrow = (props) => {
    return (
        <NavLink to={props.link} className="benefits__link link">{props.linkName}</NavLink>

    );
};

export default LinkArrow;