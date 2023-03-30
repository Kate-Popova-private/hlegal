import {createAction} from "@reduxjs/toolkit";

const servicesLoading = createAction('SERVICES_LOADING');
const servicesLoadingSuccess = createAction('SERVICES_LOADING_SUCCESS');
const servicesLoadingFailed = createAction('SERVICES_LOADING_FAILED');

export {servicesLoading, servicesLoadingSuccess, servicesLoadingFailed};