import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "../../api/api";

// Async thunk for fetching all tasks
export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async (_, {rejectWithValue}) => {
        try {
            const response = await api.get('/tasks/', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for fetching a single task by ID
export const fetchTaskById = createAsyncThunk(
    'tasks/fetchTaskById',
    async (taskId, {rejectWithValue}) => {
        try {
            const response = await api.get(`/tasks/${taskId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for creating a task
export const createTask = createAsyncThunk(
    'tasks/createTask',
    async (taskData, {rejectWithValue}) => {
        try {
            const response = await api.post('/tasks', taskData);

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for updating a task
export const updateTask = createAsyncThunk(
    'tasks/updateTask',
    async ({id, taskData}, {rejectWithValue}) => {
        try {
            const response = await api.put(`/tasks/${id}`, taskData);

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for deleting a task
export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (taskId, {rejectWithValue}) => {
        try {
            await api.delete(`/tasks/${taskId}`);
            return taskId;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


