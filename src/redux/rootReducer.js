import {combineReducers} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';


const rootReducer = combineReducers({
    auth: authReducer,
    // products: productsReducer,
    // product: productReducer,
    // categories: categoriesReducer,
    // cart: cartReducer,
    // orders: ordersReducer,
});

export default rootReducer;
