import {configureStore} from "@reduxjs/toolkit";
import servicesListReducer from "./reducer/servicesListReducer";
import serviceReducer from "./reducer/serviceReducer";
import languageReducer from "./reducer/languageReducer";
import modalMessageReducer from "./reducer/modalMessageReducer";
import employeesListReducer from "./reducer/employeesListReducer";
import employeeCardReducer from "./reducer/employeeCardReducer";
import fullPublicationsReducerUK from "./reducer/fullPublicationsReducerUK";
import fullPublicationsReducerEN from "./reducer/fullPublicationsReducerEN";
import fullPublicationsReducerRU from "./reducer/fullPublicationsReducerRU";
import {publicationListReducer} from "../Functions/publicationListReducerFn";
import {fullPublicationsReducer} from "../Functions/fullPublicationsReducerFn";


export const store = configureStore({
    reducer: {
        services: servicesListReducer,
        service: serviceReducer,
        language: languageReducer,
        publicationsListEN: publicationListReducer('EN'),
        publicationsListUA: publicationListReducer('UA'),
        publicationsListRU: publicationListReducer('RU'),
        fullPublicationsEN: fullPublicationsReducer('EN'),
        fullPublicationsUA: fullPublicationsReducer('UA'),
        fullPublicationsRU: fullPublicationsReducer('RU'),
        modalMessage: modalMessageReducer,
        employees: employeesListReducer,
        employeeCard: employeeCardReducer,
    }
})