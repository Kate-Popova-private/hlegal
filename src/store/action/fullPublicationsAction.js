import {createAction} from "@reduxjs/toolkit";

const fullPublicationsLoading = createAction("FULL_PUBLICATION_LOADING");
const fullPublicationsSuccess = createAction("FULL_PUBLICATION_SUCCESS");
const fullPublicationsFailed = createAction("FULL_PUBLICATION_FAILED");

export {fullPublicationsLoading, fullPublicationsSuccess,fullPublicationsFailed};