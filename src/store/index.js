import {configureStore} from "@reduxjs/toolkit";
import servicesReducer from "./reducer/servicesReducer";
import serviceCardReducer from "./reducer/serviceCardReducer";


export const store = configureStore({
    reducer: {
        benefits: servicesReducer,
        service: serviceCardReducer,
    }
})