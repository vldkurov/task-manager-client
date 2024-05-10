import {combineReducers} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import taskReducer from '../features/tasks/taskSlice'


const rootReducer = combineReducers({
    auth: authReducer,
    tasks: taskReducer,
    // products: productsReducer,
    // product: productReducer,
    // categories: categoriesReducer,
    // cart: cartReducer,
    // orders: ordersReducer,
});

export default rootReducer;
