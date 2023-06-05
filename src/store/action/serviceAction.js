import {createAction} from "@reduxjs/toolkit";

const serviceLoading = createAction('SERVICE_LOADING');
const serviceLoadingSuccess = createAction('SERVICE_SUCCESS');
const serviceLoadingFailed = createAction('SERVICE_FAILED');

export {serviceLoading, serviceLoadingSuccess, serviceLoadingFailed};