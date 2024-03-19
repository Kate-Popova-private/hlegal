import {createAction} from "@reduxjs/toolkit";

export function publicationListAction(lang) {
    const publicationsNewsLoading = createAction(`publicationsNews${lang}Loading`);
    const publicationsArticleLoading = createAction(`publicationsNews${lang}Loading`);
    const publicationsNewsSuccess = createAction(`publicationsNews${lang}Loading`);
    const publicationsArticlesSuccess = createAction(`publicationsNews${lang}Loading`);
    return [publicationsNewsLoading, publicationsArticleLoading, publicationsNewsSuccess, publicationsArticlesSuccess];
}