import {createAction} from "@reduxjs/toolkit";
import employeesListReducer from "../reducer/employeesListReducer";

const employeesListLoading = createAction('EMPLOYEES_LIST_LOADING');
const employeesListLoadingSuccess = createAction('EMPLOYEES_LIST_LOADING_SUCCESS');
const employeesListLoadingFailed = createAction('EMPLOYEES_LIST_LOADING_FAILED');

export {employeesListLoading, employeesListLoadingSuccess, employeesListLoadingFailed};