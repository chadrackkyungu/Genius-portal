import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: "",
    servicePro: "",
};

const userSlice = createSlice({
    name: 'users',
    initialState, // state
    reducers: {
        Login: (state, action) => {
            state.users = action.payload
        },
        ServiceProLogin: (state, action) => {
            state.servicePro = action.payload
        },
    },
});

export const loginUser = (state) => state.users.users
export const serviceProLoginUser = (state) => state.users.servicePro
export const { Login, ServiceProLogin } = userSlice.actions;
export default userSlice.reducer;

