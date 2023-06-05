import {configureStore} from "@reduxjs/toolkit";
import benefitsReducer from "./reducer/benefitsReducer";
import serviceReducer from "./reducer/serviceReducer";
import languageReducer from "./reducer/languageReducer";
import publicationsListReducer from "./reducer/publicationsListReducer";


export const store = configureStore({
    reducer: {
        benefits: benefitsReducer,
        service: serviceReducer,
        language: languageReducer,
        publicationsList: publicationsListReducer,
    }
})