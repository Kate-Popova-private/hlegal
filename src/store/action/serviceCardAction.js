import {createAction} from "@reduxjs/toolkit";

const serviceCardLoading = createAction('SERVICE_CARD_LOADING');
const serviceCardLoadingSuccess = createAction('SERVICE_CARD_SUCCESS');
const serviceCardLoadingFailed = createAction('SERVICE_CARD_FAILED');

export {serviceCardLoading, serviceCardLoadingSuccess, serviceCardLoadingFailed};