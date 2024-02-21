import React, {useEffect, useState} from "react";
import "./publications.scss"
import PublicationsList from "../../components/PublicationsList/publicationsList";
import Switch from "../../components/Switch";
import axios from "axios";
import DownloadButton from "../../components/DownloadButton";
import {publicationsArticlesSuccess, publicationsNewsSuccess} from "../../store/action/publicationListAction";
import {useDispatch, useSelector} from "react-redux";
import {newsData, articlesData} from "../../data/publicationsData";

const Publications = () => {

    const [topPage, setTopPage] = useState(newsData);
    const {news, articles} = useSelector((store) => store.publicationsList);
    const [page, setPage] = useState(topPage.page);
    const [currentPage, setCurrentPage] = useState(topPage.currentPage);
    const [maxPage, setMaxPage] = useState(news?.maxPage);
    const dispatch = useDispatch();


    useEffect(() => {
        if ((!news.result.length && topPage.name === 'news' && currentPage <= page) || (topPage.name === 'news' && page >= 2 && currentPage < page)) {
            axios.get(`http://hlegal/api.php?type=${topPage.name}&page=${topPage.page}`).then(({data}) => {
                setMaxPage(data.maxPage)
                dispatch(publicationsNewsSuccess(data));
                setCurrentPage(page);
                topPage.currentPage = page;
            })
        }
        if ((!articles.result.length && topPage.name === 'article' && currentPage <= page) || (topPage.name === 'article' && page >= 2 && currentPage < page)) {
            axios.get(`http://hlegal/api.php?type=${topPage.name}&page=${topPage.page}&perpage=6`).then(({data}) => {
                setMaxPage(data.maxPage)
                dispatch(publicationsArticlesSuccess(data));
                setCurrentPage(page);
                topPage.currentPage = page;
            })
        }

    }, [topPage, page]);

    useEffect(() => {
        setPage(topPage.page);
        setCurrentPage(topPage.currentPage);
    }, [topPage]);

    function pageIncrement() {
        setPage(topPage.page += 1);
    }

    return (
        <>
            <div className="switch-wrap">
                <Switch switch1='news' switch2='articles' isActive={topPage}
                        setActive={setTopPage}></Switch>
            </div>
            <PublicationsList topPage={topPage.name} title={false}></PublicationsList>
            <div className="download-btn-wrap">
                {maxPage > topPage.page && <DownloadButton pageIncrement={pageIncrement}></DownloadButton>}
            </div>
        </>
    );
};
export default Publications;
export {newsData, articlesData};