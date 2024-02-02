import {createReducer} from "@reduxjs/toolkit";


const employeeCardReducer = createReducer([], (builder) => {
    builder
        .addCase("EMPLOYEE_CARD_LOADING", (store, action) => {
            return {...store, loading: true};
        })
        .addCase("EMPLOYEE_CARD_LOADING_SUCCESS", (store, action) => {
            return {...store, ...{loading: false, employee: action.payload}};
        })
        .addCase("EMPLOYEE_CARD_LOADING_FAILED", (store, action) => {
            return {...store, ...{loading: false, error: action.payload}};
        })
})

export default employeeCardReducer;