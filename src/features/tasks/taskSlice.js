import {createSlice} from "@reduxjs/toolkit";
import {createTask, deleteTask, fetchTaskById, fetchTasks, updateTask} from "./taskOperations";
import {logoutUser} from '../auth/authOperations'

const initialState = {
    items: [],
    status: null,
    error: null,
    currentTask: null,
};


const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        // You can also add reducers for non-async actions here
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'succeeded';
                state.currentTask = null
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchTaskById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTaskById.fulfilled, (state, action) => {
                state.currentTask = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchTaskById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                const index = state.items.findIndex(task => task.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(deleteTask.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Remove task from state
                state.items = state.items.filter(task => task.id !== action.payload);
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(logoutUser.fulfilled, () => initialState)
        // Add other cases for different thunks as needed
    }
});

export default taskSlice.reducer;
