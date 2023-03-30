import React from 'react';
import loader from "../../img/Loader.svg";
import '../../styles/_loader.scss'

const Loader = () => {
    return (
        <div className="loader"><img className="loading" src={loader} alt="loading"/></div>
    );
};

export default Loader;