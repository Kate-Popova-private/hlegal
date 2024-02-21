import React from 'react';
import Benefits from "../components/Benefits";
import Clients from "../components/Clients/Clients";

const Services = () => {
    return (
        <>
            <div className="bg-container">
                <Benefits/>
            </div>
            <Clients/>
        </>
    );
};

export default Services;