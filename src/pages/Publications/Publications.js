import React, {useEffect, useState} from "react";
import "./publications.scss"
import PublicationsList from "../../components/publicationsList";
import Switch from "../../components/Switch/index";
import axios from "axios";

const Publications = () => {

    const [switchActive, setSwitchActive] = useState('news');

    return (
        <>
            <div className="switch-wrap">
                <Switch switch1="news" switch2="articles" isActive={switchActive}
                        setActive={setSwitchActive}></Switch>
            </div>
            <PublicationsList activeList ={switchActive} link={false} title={false}></PublicationsList>
        </>
    );
};
export default Publications;