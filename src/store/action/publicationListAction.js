import {createAction} from "@reduxjs/toolkit";

export const publicationsNewsENLoading = createAction('PUBLICATIONS_NEWS_EN_LOADING');
export const publicationsNewsUKLoading = createAction('PUBLICATIONS_NEWS_UA_LOADING');
export const publicationsNewsRULoading = createAction('PUBLICATIONS_NEWS_RU_LOADING');
export const publicationsArticleENLoading = createAction('PUBLICATIONS_ARTICLE_EN_LOADING');
export const publicationsArticleUKLoading = createAction('PUBLICATIONS_ARTICLE_UA_LOADING');
export const publicationsArticleRULoading = createAction('PUBLICATIONS_ARTICLE_RU_LOADING');
export const publicationsNewsENSuccess = createAction('PUBLICATIONS_NEWS_EN_SUCCESS');
export const publicationsNewsUKSuccess = createAction('PUBLICATIONS_NEWS_UA_SUCCESS');
export const publicationsNewsRUSuccess = createAction('PUBLICATIONS_NEWS_RU_SUCCESS');
export const publicationsArticlesENSuccess = createAction('PUBLICATIONS_ARTICLES_EN_SUCCESS');
export const publicationsArticlesUKSuccess = createAction('PUBLICATIONS_ARTICLES_UA_SUCCESS');
export const publicationsArticlesRUSuccess = createAction('PUBLICATIONS_ARTICLES_RU_SUCCESS');
export const publicationsListENFailed = createAction('PUBLICATIONS_LIST_EN_FAILED');
export const publicationsListUKFailed = createAction('PUBLICATIONS_LIST_UA_FAILED');
export const publicationsListRUFailed = createAction('PUBLICATIONS_LIST_RU_FAILED');
