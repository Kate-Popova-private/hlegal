import {createAction} from "@reduxjs/toolkit";

const benefitsLoading = createAction('SERVICES_LOADING');
const benefitsLoadingSuccess = createAction('BENEFITS_LOADING_SUCCESS');
const benefitsLoadingFailed = createAction('SERVICES_LOADING_FAILED');

export {benefitsLoading, benefitsLoadingSuccess, benefitsLoadingFailed};