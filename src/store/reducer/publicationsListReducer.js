import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    news: {
        result:[],
        maxPage:0
    },
    articles: {
        result:[],
        maxPage:0
    }
}

const publicationsListReducer = createReducer(initialState, (builder) => {
    builder
        .addCase("PUBLICATIONS_LIST_LOADING", (store, action) => {
            return {...store, loading: true};
        })
        .addCase("PUBLICATIONS_NEWS_SUCCESS", (store, action) => {

            if(store.news && !!store.news.result.find(a => action.payload.result.find(b=>a.id === b.id))){
                return {...store};
            }

            const updatedNews = {
                result: store.news ? [...store.news.result,...action.payload.result] : [...action.payload.result],
                maxPage: action.payload.maxPage
            }
            return {...store, ...{loading: false, news: updatedNews}};
        })
        .addCase("PUBLICATIONS_ARTICLES_SUCCESS", (store, action) => {

            if(store.articles && !!store.articles.result.find(a => action.payload.result.find(b=>a.id === b.id))){
                return {...store};
            }

            const updatedArticles = {
                result: store.articles ? [...store.articles.result,...action.payload.result] : [...action.payload.result],
                maxPage: action.payload.maxPage
            }
            return {...store, ...{loading: false, articles: updatedArticles}};
    })
        .addCase("PUBLICATIONS_LIST_LOADING_FAILED", (store, action) => {
            return {...store, ...{loading: false, error: action.payload}};
        })
})

export default publicationsListReducer;