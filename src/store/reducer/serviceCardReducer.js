import {createReducer} from "@reduxjs/toolkit";

const serviceCardReducer = createReducer({}, builder => {
    builder
        .addCase("SERVICE_CARD_LOADING", (store, action) => {
            return {...store, loading: true};
        })
        .addCase("SERVICE_CARD_SUCCESS", (store, action) => {
            console.log('store',store)
            console.log('action',action)
            return {...store, ...{loading: false, fullService:action.payload}};
        })
        .addCase("SERVICE_CARD_FAILED", (store, action) => {
            return {...store, ...{loading: false, error: action.payload}};
        })
})

export default serviceCardReducer;