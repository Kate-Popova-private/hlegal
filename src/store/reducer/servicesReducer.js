import {createReducer} from "@reduxjs/toolkit";


const servicesReducer = createReducer([], (builder) => {
    builder
        .addCase("SERVICES_LOADING", (store, action) => {
            return {...store, loading: true};
        })
        .addCase("SERVICES_LOADING_SUCCESS", (store, action) => {
            return {...store, ...{loading: false, benefits: action.payload}};
        })
        .addCase("SERVICES_LOADING_FAILED", (store, action) => {
            return {...store, ...{loading: false, error: action.payload}};
        })
})

export default servicesReducer;