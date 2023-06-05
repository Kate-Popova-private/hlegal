import {createReducer} from "@reduxjs/toolkit";

const serviceReducer = createReducer({}, builder => {
    builder
        .addCase("SERVICE_LOADING", (store, action) => {
            return {...store, loading: true};
        })
        .addCase("SERVICE_SUCCESS", (store, action) => {
            return {...store, ...{loading: false, fullService:action.payload}};
        })
        .addCase("SERVICE_FAILED", (store, action) => {
            return {...store, ...{loading: false, error: action.payload}};
        })
})

export default serviceReducer;