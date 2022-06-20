import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../slices/authSlice";
import { projectsSlice } from "../slices/projectsSlice";
import { trainingsSlice } from "../slices/trainingSlice";

const rootReducer = combineReducers({
    _auth: authSlice.reducer,
    _proj: projectsSlice.reducer,
    _train: trainingsSlice.reducer
})

const store = configureStore({ reducer: rootReducer })

export default store