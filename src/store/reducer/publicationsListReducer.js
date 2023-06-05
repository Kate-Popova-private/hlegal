import {createReducer} from "@reduxjs/toolkit";


const publicationsListReducer = createReducer([], (builder) => {
    builder
        .addCase("PUBLICATIONS_LIST_LOADING", (store, action) => {
            return {...store, loading: true};
        })
        .addCase("PUBLICATIONS_NEWS_SUCCESS", (store, action) => {
            return {...store, ...{loading: false, news: action.payload}};
        })
        .addCase("PUBLICATIONS_ARTICLES_SUCCESS", (store, action) => {
        return {...store, ...{loading: false, articles: action.payload}};
    })
        .addCase("PUBLICATIONS_LIST_LOADING_FAILED", (store, action) => {
            return {...store, ...{loading: false, error: action.payload}};
        })
})

export default publicationsListReducer;