import {createAction} from "@reduxjs/toolkit";
import employeesListReducer from "../reducer/employeesListReducer";

const employeeCardLoading = createAction('EMPLOYEE_CARD_LOADING');
const employeeCardLoadingSuccess = createAction('EMPLOYEE_CARD_LOADING_SUCCESS');
const employeeCardLoadingFailed = createAction('EMPLOYEE_CARD_LOADING_FAILED');

export {employeeCardLoading, employeeCardLoadingSuccess, employeeCardLoadingFailed};