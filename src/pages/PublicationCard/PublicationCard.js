import React, {useEffect, useState} from 'react';
import PublicationsList from "../../components/publicationsList";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {publicationsNewsSuccess} from "../../store/action/publicationListAction";
import "./publicationCard.scss";
import {useLocation, useParams} from "react-router-dom";
import {fullPublicationsSuccess} from "../../store/action/fullPublicationsAction";
import Socials from "../../components/Socials";

const PublicationCard = () => {
        const {id} = useParams();
        let {news} = useSelector((store) => store.publicationsList);
        let {publicationCard} = useSelector((store) => store.fullPublications);
        const dispatch = useDispatch();
        let {img, title, content, created_at} = {...publicationCard?.result?.mainContent};
        let {additionalContent} = {...publicationCard?.result};

        // const { pathname } = useLocation();

        useEffect(() => {
        }, [id]);

        useEffect(() => {
            // For recommendation section
            if (news.result.length === 0) {
                axios.get(`http://hlegal/api.php?type=news&page=1&perpage=3`).then(({data}) => {

                    dispatch(publicationsNewsSuccess(data));
                })
            }
            axios.get(`http://hlegal/api.php?type=news&id=${id}`).then(({data}) => {

                data.result.additionalContent?.sort(function (a, b) {
                    return a.position - b.position;
                })
                dispatch(fullPublicationsSuccess(data));

            }).catch(() => console.log('error'));

            window.scrollTo(0, 0);
        }, [id]);

        return (
            <>
                <div className="public-card__wrap">
                    <div className="public-card">
                        <img src={`http://hlegal/${img}`} alt="" className="public-card__img"/>
                        <h2 className="public-card__title">{title}</h2>
                        <span className="public-card__date">{created_at}</span>
                        <p className="public-card__paragraph">{content}</p>
                        {additionalContent?.map((item, index) => {

                            if (item.type === 'img') {
                                return <img src={`http://hlegal/${item.content}`} className="public-card__additionalImg"
                                            alt=""/>
                            }
                            if (item.type === 'title') {
                                return <h2 className="public-card__additionalTitle">{item.content}</h2>
                            }
                            if (item.type === 'paragraph') {
                                return <p className="public-card__paragraph">{item.content}</p>
                            }
                        })}
                    </div>
                    <Socials></Socials>
                </div>
                <PublicationsList topPage='news' title="Recommended" link={true}></PublicationsList>
            </>
        );
    }
;

export default PublicationCard;