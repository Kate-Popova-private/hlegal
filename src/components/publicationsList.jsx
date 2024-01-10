import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Loader from "./Loader/Loader";
import {Link} from "react-router-dom";

const PublicationsList = (props) => {

    let {loading, news, articles, error} = useSelector((store) => store.publicationsList);

    return (
        <section className="publications">
            <div className="publications__wrap">
                {props.link && <a href="/hlegal/publications" className="publications__link">Publications</a>}
                {props.title && <h4 className="publications__title">{props.title}</h4>}
                <div className="publications__container">
                    {loading ? <Loader></Loader>
                        : (props.topPage === 'news' ? news?.result : articles?.result)?.map((item, index) =>

                            <Link key={`pblc_${index}`} to={`/publication/${item.id}`}>
                                <div className="publication">
                                    <img className="publication__img" src={`http://hlegal/${item.img}`}
                                         alt="publication"/>
                                    <h5 className="publication__title">{item.title}</h5>
                                    <span className="publication__date">{item.created_at}</span>
                                    <p className="publication__shortDesc">{item.shortDesc}</p>
                                </div>
                            </Link>
                        )}
                </div>
            </div>
        </section>

    );
};

export default PublicationsList;