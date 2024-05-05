import {createSlice} from '@reduxjs/toolkit';
import {loginUser, signupUser} from "./authOperations";

const initialState = {
    user: null,
    token: localStorage.getItem('token'),
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            localStorage.removeItem('token');
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signupUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user; // Assuming payload contains user data
                state.token = action.payload.token; // Assuming payload contains token
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload.error; // Assuming payload contains error details
            })
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user; // Store user data
                state.token = action.payload.token; // Store token in state
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload.error;
            });
    }
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
