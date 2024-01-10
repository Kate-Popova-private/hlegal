import {createReducer} from "@reduxjs/toolkit";

const fullPublicationsReducer = createReducer([], builder => {
    builder
        .addCase("FULL_PUBLICATION_LOADING", (store, action) => {
            return {...store, loading: true};
        })
        .addCase("FULL_PUBLICATION_SUCCESS", (store, action) => {
        return {...store, ...{loading: false, publicationCard: action.payload}};
    })
        .addCase("FULL_PUBLICATION_FAILED", (store, action) => {
        return {...store, ...{loading: false, error: action.payload}};
    })
})
export default fullPublicationsReducer;