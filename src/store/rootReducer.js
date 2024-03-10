import { combineReducers } from "@reduxjs/toolkit";
import mainDataSlice from "./MaindataSlice/mainDataSlice";

export const rootReducer = {
    mainData:mainDataSlice
};

combineReducers(rootReducer);
