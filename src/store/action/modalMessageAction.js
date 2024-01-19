import {createAction} from "@reduxjs/toolkit";

const modalMessageAdd = createAction('ADD_MESSAGE');
const modalMessageRemove = createAction('REMOVE_MESSAGE');

export {modalMessageAdd, modalMessageRemove};