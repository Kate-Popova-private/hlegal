import React, {useEffect, useState} from "react";
import PublicationsList from "../../components/PublicationsList/publicationsList";
import Switch from "../../components/Switch";
import axios from "axios";
import DownloadButton from "../../components/DownloadButton";
import {publicationsArticlesSuccess, publicationsNewsSuccess} from "../../store/action/publicationListAction";
import {useDispatch, useSelector} from "react-redux";
import {publicationData} from "../../data/publicationsData";
import "./publications.scss";

const Publications = () => {
    const {news, articles} = useSelector((store) => store.publicationsList);
    const [topPage, setTopPage] = useState(publicationData[0]);
    const [loadingPage, setLoadingPage] = useState(topPage.page);
    const [currentPage, setCurrentPage] = useState(topPage.currentPage);
    const dispatch = useDispatch();

    useEffect(() => {
        switch (topPage.name) {
            case 'news':
                console.log('topPage: ');
                console.log(topPage);
                if ((news.result.length < 6 && currentPage === loadingPage) || (loadingPage >= 2 && currentPage < loadingPage)) {
                    axios.get(`http://hlegal/api.php?type=${topPage.name}&page=${topPage.page}&perpage=6`).then(({data}) => {
                        dispatch(publicationsNewsSuccess(data));
                        topPage.currentPage = loadingPage;
                        topPage.maxPage = data.maxPage;
                    })
                }
                break;
            case 'article':
                if ((!articles.result.length && currentPage <= loadingPage) || (loadingPage >= 2 && currentPage < loadingPage)) {
                    axios.get(`http://hlegal/api.php?type=${topPage.name}&page=${topPage.page}&perpage=2`).then(({data}) => {
                        dispatch(publicationsArticlesSuccess(data));
                        topPage.currentPage = loadingPage;
                        topPage.maxPage = data.maxPage;
                    })
                }
                break;
        }
    }, [topPage, loadingPage]);

    useEffect(() => {
        setLoadingPage(topPage.page);
        setCurrentPage(topPage.currentPage);
    }, [topPage]);

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