import {createReducer} from "@reduxjs/toolkit";


const employeesListReducer = createReducer([], (builder) => {
    builder
        .addCase("EMPLOYEES_LIST_LOADING", (store, action) => {
            return {...store, loading: true};
        })
        .addCase("EMPLOYEES_LIST_LOADING_SUCCESS", (store, action) => {
            return {...store, ...{loading: false, employeesList: action.payload}};
        })
        .addCase("EMPLOYEES_LIST_LOADING_FAILED", (store, action) => {
            return {...store, ...{loading: false, error: action.payload}};
        })
})

export default employeesListReducer;