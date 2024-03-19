import {createReducer} from "@reduxjs/toolkit";

export function publicationListReducer(lang) {
    return createReducer({
        loading: false,
        news: {
            result: [],
            maxPage: 0
        },
        articles: {
            result: [],
            maxPage: 0
        }
    }, (builder) => {
        builder
            .addCase(`PUBLICATIONS_NEWS_${lang}_LOADING`, (store, action) => {
                return {...store, loading: true};
            })
            .addCase(`PUBLICATIONS_ARTICLE_${lang}_LOADING`, (store, action) => {
                return {...store, loading: true};
            })
            .addCase(`PUBLICATIONS_NEWS_${lang}_SUCCESS`, (store, action) => {

                if (store.news && !!store.news.result.find(a => action.payload.result.find(b => a.id === b.id))) {
                    return {...store};
                }

                const updatedNews = {
                    result: store.news ? [...store.news.result, ...action.payload.result] : [...action.payload.result],
                    maxPage: action.payload.maxPage
                }
                return {...store, ...{loading: false, news: updatedNews}};
            })
            .addCase(`PUBLICATIONS_ARTICLES_${lang}_SUCCESS`, (store, action) => {

                if (store.articles && !!store.articles.result.find(a => action.payload.result.find(b => a.id === b.id))) {
                    return {...store};
                }

                const updatedArticles = {
                    result: store.articles ? [...store.articles.result, ...action.payload.result] : [...action.payload.result],
                    maxPage: action.payload.maxPage
                }
                return {...store, ...{loading: false, articles: updatedArticles}};
            })
            .addCase(`PUBLICATIONS_LIST_${lang}_FAILED`, (store, action) => {
                return {...store, ...{loading: false, error: action.payload}};
            })
    })
}