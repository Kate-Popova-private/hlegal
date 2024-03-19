import React, {useEffect, useState} from "react";
import PublicationsList from "../../components/PublicationsList/publicationsList";
import Switch from "../../components/Switch";
import axios from "axios";
import DownloadButton from "../../components/DownloadButton";
import {
    // publicationsArticleLoading,
    // publicationsArticlesSuccess,
    // publicationsListFailed,
    // publicationsNewsLoading,
    // publicationsNewsSuccess
} from "../../store/action/publicationListAction";
import {useDispatch, useSelector} from "react-redux";
import {publicationData} from "../../localFixtureData/publicationsData";
import "./publications.scss";
import {createAction} from "@reduxjs/toolkit";

const Publications = () => {
    const {language} = useSelector((store) => store.language);
    const {news, articles} = useSelector((store) => store[`publicationsList${language}`]);
    const [topPage, setTopPage] = useState(publicationData[0]);
    const [loadingPage, setLoadingPage] = useState(topPage.page);
    const [currentPage, setCurrentPage] = useState(topPage.currentPage);
    const dispatch = useDispatch();


    useEffect(() => {
        switch (topPage.name) {
            case 'news':
                !news && dispatch(createAction(`PUBLICATIONS_NEWS_${language}_LOADING`)());

                if ((news.result.length < 6 && currentPage === loadingPage) || (loadingPage >= 2 && currentPage < loadingPage)) {
                    axios.get(`http://hlegal/api.php?type=${topPage.name}&lang=${language}&page=${topPage.page}&perpage=6`).then(({data}) => {
                        console.log('ten', data)
                        // dispatch(publicationsNewsSuccess(data));
                        dispatch(createAction(`PUBLICATIONS_NEWS_${language}_SUCCESS`)(data));
                        topPage.currentPage = loadingPage;
                        topPage.maxPage = data.maxPage;
                    }).catch(function (error) {
                        dispatch(createAction(`PUBLICATIONS_LIST_${language}_FAILED`)(error.message));
                    });
                }
                break;
            case 'article':
                !articles && dispatch(createAction(`PUBLICATIONS_ARTICLE_${language}_LOADING`)());

                if ((!articles.result.length && currentPage <= loadingPage) || (loadingPage >= 2 && currentPage < loadingPage)) {
                    axios.get(`http://hlegal/api.php?type=${topPage.name}&lang=${language}&page=${topPage.page}&perpage=6`).then(({data}) => {
                        dispatch(createAction(`PUBLICATIONS_ARTICLES_${language}_SUCCESS`)(data));
                        topPage.currentPage = loadingPage;
                        topPage.maxPage = data.maxPage;
                    }).catch(function (error) {
                        dispatch(createAction(`PUBLICATIONS_LIST_${language}_FAILED`)(error.message));
                    });
                }
                break;
        }
        console.log('language', language);
    }, [topPage, loadingPage, language]);

    useEffect(() => {
        setLoadingPage(topPage.page);
        setCurrentPage(topPage.currentPage);
        dispatch(createAction(`PUBLICATIONS_LIST_${language}_FAILED`)());
    }, [topPage, language]);

    return (
        <>
            <div className="switch-wrap">
                <Switch isActive={topPage}
                        setActive={setTopPage}></Switch>
            </div>
            <PublicationsList topPage={topPage.name} title={false} link={false}></PublicationsList>
            <div className="download-btn-wrap">
                {topPage.maxPage > topPage.page &&
                    <DownloadButton pageIncrement={() => setLoadingPage(topPage.page += 1)}></DownloadButton>}
            </div>
        </>
    );
};
export default Publications;