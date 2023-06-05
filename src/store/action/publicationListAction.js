import {createAction} from "@reduxjs/toolkit";

const publicationsListLoading = createAction('PUBLICATIONS_LIST_LOADING');
const publicationsNewsSuccess = createAction('PUBLICATIONS_NEWS_SUCCESS');
const publicationsArticlesSuccess = createAction('PUBLICATIONS_ARTICLES_SUCCESS');
const publicationsListFailed = createAction('PUBLICATIONS_LIST_LOADING_FAILED');

export {publicationsListLoading, publicationsNewsSuccess, publicationsArticlesSuccess, publicationsListFailed};