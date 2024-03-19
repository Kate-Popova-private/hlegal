import {createReducer} from "@reduxjs/toolkit";

export function fullPublicationsReducer(lang) {
    return createReducer([], builder => {
        builder
            .addCase(`FULL_PUBLICATION_${lang}_LOADING`, (store, action) => {
                return {...store, loading: true};
            })
            .addCase(`FULL_PUBLICATION_${lang}_SUCCESS`, (store, action) => {
                return {...store, ...{loading: false, publicationCard: action.payload}};
            })
            .addCase(`FULL_PUBLICATION_${lang}_FAILED`, (store, action) => {
                return {...store, ...{loading: false, error: action.payload}};
            })
    })
}