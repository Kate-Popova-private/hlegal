import React, {useEffect, useState} from 'react';
import '../styles/home.scss'
import Benefits from "../components/benefits";
import LinkArrow from "../components/linkArrow";
import Clients from "../components/Clients";
import PublicationsList from "../components/publicationsList";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {publicationsNewsSuccess} from "../store/action/publicationListAction";
import TeamMessage from "../components/TeamMessage";

const Home = () => {

    const {language} = useSelector((store) => store.language);
    let {news} = useSelector((store) => store.publicationsList);

    const dispatch = useDispatch();

    let jsonLang = require(`../translate/translate_${language}.json`);

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
                <section className="hero">
                    <h2 className="hero__title">{jsonLang.home.title}</h2>
                    <a href="/#" className="hero__scroll">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none">
                            <g stroke="#fff" strokeWidth="2" clipPath="url(#a)">
                                <circle cx="21" cy="21" r="20" opacity=".5"/>
                                <path d="m12 18 9 9 9-9"/>
                            </g>
                            <defs>
                                <clipPath id="a">
                                    <path fill="#fff" d="M0 0h42v42H0z"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </section>
                <main className="main">
                    <div className="advantage">
                        <div className="advantage__nav">
                            <span className="advantage__nav-item">Consistent</span>
                            <span className="advantage__nav-item">Customer oriented</span>
                            <span className="advantage__nav-item">Innovative</span>
                            <span className="advantage__nav-item">Business oriented</span>
                        </div>
                        <div className="advantage__content">
                            <h4 className="advantage__title">We turn the idea of legal services</h4>
                            <p className="advantage__text">Consolidating many years of experience and practice, the
                                company's
                                lawyers
                                accompany complex projects and achieve a number of important decisions for the industry.
                                Many
                                of
                                them
                                form the practice of applying the law of the sea in Ukraine.</p>
                        </div>
                    </div>
                    <LinkArrow link={"/services"} linkName={"Services"}/>
                    <Benefits/>
                </main>
            </div>
            <TeamMessage></TeamMessage>
            <Clients/>
            <PublicationsList topPage='news' perpage={3} title="We have something to tell"
                              link={true}></PublicationsList>
        </>
    );
};

export default Home;