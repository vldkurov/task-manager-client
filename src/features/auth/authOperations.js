import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "../../api/api";

// Async thunk for logging in
export const loginUser = createAsyncThunk(
    'auth/login',
    async (userData, {rejectWithValue}) => {
        try {
            const response = await api.post('/auth/login', userData);
            // Assume your server responds with the token and user data
            localStorage.setItem('token', response.data.token);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const signupUser = createAsyncThunk(
    'auth/signup',
    async (userData, {rejectWithValue}) => {
        try {
            const response = await api.post('/auth/signup', userData);
            localStorage.setItem('token', response.data.token); // Store the token received upon successful signup
            return response.data; // Contains user data and token
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, {rejectWithValue}) => {
        try {
            // Optionally notify the server about the logout
            const response = await api.post('/auth/logout');
            localStorage.removeItem('token'); // Ensure to remove token
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    async (_, {getState, rejectWithValue}) => {
        const token = getState().auth.token;
        if (!token) {
            return rejectWithValue('No token found');
        }

        try {
            const response = await api.get('/auth/validate', {
                headers: {Authorization: token}
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
