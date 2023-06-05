import {createReducer} from "@reduxjs/toolkit";

const languageReducer = createReducer({}, builder => {
    builder
        .addCase("LANGUAGE_SELECTED", (store, action) => {
            return {...store, language: action.payload};
        })
})

export default languageReducer;