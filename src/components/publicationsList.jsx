import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {
    publicationsArticlesSuccess,
    publicationsListSuccess,
    publicationsNewsSuccess
} from "../store/action/publicationListAction";
import Loader from "./Loader/Loader";
import {Link} from "react-router-dom";

const PublicationsList = (props) => {

    let {loading, news, articles, error} = useSelector((store) => store.publicationsList);
    const dispatch = useDispatch();
    const [top, setTop] = useState([]);
    const [page, setPage] = useState(1);
    const [topType, setTopType] = useState(props.activeList || 'news');

    useEffect(() => {

        axios.get(`http://hlegal/api.php?type=${topType}&page=${page}`).then(({data}) => {
            if (topType === 'news') {

                dispatch(publicationsNewsSuccess(data));
            } else {
                dispatch(publicationsArticlesSuccess(data));
            }
            setTop(data);
        })
    }, [topType]);

    useEffect(() => {
        setTopType(props.activeList)
    }, [props.activeList]);

    return (

        <section className="publications">
            {
                console.log('publicationsList', news)
            }
            <div className="publications__wrap">
                {props.link && <a href="/#" className="publications__link">Publications</a>}
                {props.title && <h4 className="publications__title">{props.title}</h4>}
                <div className="publications__container">
                    {loading ? <Loader></Loader>
                        : top?.result && top.result.map((item, index) =>
                        <Link key={`pblc_${index}`} to={`/publication/${item.id}`}>
                            <div className="publication">
                                <img className="publication__img" src={`http://hlegal/${item.img}`} alt="publication"/>
                                <h5 className="publication__title">{item.title}</h5>
                                <span className="publication__date">{item.created_at}</span>
                                <p className="publication__content">{item.shortDesc}</p>
                            </div>
                        </Link>
                    )}

                </div>
            </div>
        </section>

    );
};

export default PublicationsList;