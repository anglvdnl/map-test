import { createSlice } from '@reduxjs/toolkit';
import { loginReducer as login, logoutReducer as logout } from "../reducers/userReducers"
import { DefaultUser } from '../../data/dto/User/UserDto';

const authSlice = createSlice({
    name: "_auth",
    initialState: DefaultUser,
    reducers: {
        login,
        logout
    }
})

const authActions = authSlice.actions;

export { authSlice, authActions }