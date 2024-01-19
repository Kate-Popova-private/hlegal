import {createReducer} from "@reduxjs/toolkit";


const modalMessageReducer = createReducer({message:false}, (builder) => {
    builder
        .addCase("ADD_MESSAGE", (store, action) => {
            return {...store, message: action.payload};
        })
        .addCase("REMOVE_MESSAGE", (store, action) => {
            return {...store, ...{message: false}};
        })
})

export default modalMessageReducer;