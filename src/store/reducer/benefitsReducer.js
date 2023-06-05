import {createReducer} from "@reduxjs/toolkit";


const benefitsReducer = createReducer([], (builder) => {
    builder
        .addCase("BENEFITS_LOADING", (store, action) => {
            return {...store, loading: true};
        })
        .addCase("BENEFITS_LOADING_SUCCESS", (store, action) => {
            return {...store, ...{loading: false, benefits: action.payload}};
        })
        .addCase("BENEFITS_LOADING_FAILED", (store, action) => {
            return {...store, ...{loading: false, error: action.payload}};
        })
})

export default benefitsReducer;