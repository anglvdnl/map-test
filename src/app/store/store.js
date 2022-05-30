import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../slices/authSlice";

const rootReducer = combineReducers({
    _auth: authSlice.reducer
})

const store = configureStore({ reducer: rootReducer })

export default store