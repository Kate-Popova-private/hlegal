import React, {useEffect, useState} from 'react';
import Benefits from "../components/Benefits";
import Clients from "../components/Clients/Clients";
import PublicationsList from "../components/PublicationsList/publicationsList";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {publicationsNewsSuccess} from "../store/action/publicationListAction";
import TeamMessage from "../components/TeamMessage";
import Advantage from "../components/Advantage";
import Hero from "../components/Hero";

const Home = () => {

    let {news} = useSelector((store) => store.publicationsList);

    const dispatch = useDispatch();


    useEffect(() => {
        if (!news.result.length) {
            axios.get(`http://hlegal/api.php?type=news&page=1&mode=list&perpage=3`).then(({data}) => {

                dispatch(publicationsNewsSuccess(data));
            })
        }
    }, []);
    return (
        <>
            <div className="bg-logo">
                <Hero></Hero>
                <Advantage></Advantage>
                <Benefits/>
            </div>
            <TeamMessage></TeamMessage>
            <Clients/>
            <PublicationsList topPage='news' perpage={3} title="We have something to tell"></PublicationsList>
        </>
    );
};

export default Home;