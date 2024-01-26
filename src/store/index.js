import {configureStore} from "@reduxjs/toolkit";
import benefitsReducer from "./reducer/benefitsReducer";
import serviceReducer from "./reducer/serviceReducer";
import languageReducer from "./reducer/languageReducer";
import publicationsListReducer from "./reducer/publicationsListReducer";
import fullPublicationsReducer from "./reducer/fullPublicationsReducer";
import modalMessageReducer from "./reducer/modalMessageReducer";
import employeesListReducer from "./reducer/employeesListReducer";


export const store = configureStore({
    reducer: {
        benefits: benefitsReducer,
        service: serviceReducer,
        language: languageReducer,
        publicationsList: publicationsListReducer,
        fullPublications: fullPublicationsReducer,
        modalMessage: modalMessageReducer,
        employeesList: employeesListReducer,
    }
})