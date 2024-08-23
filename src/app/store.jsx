import { configureStore } from "@reduxjs/toolkit";
import dataReducer from '../features/dataSlice';
import searchReducer from '../features/searchSlice'; 
import productsReducer from "../features/productsSlice";
import cartReducer from '../features/cartSlice'; // Import cart slice

export const store = configureStore({
    reducer: {
        data: dataReducer,
        search: searchReducer,
        products: productsReducer,
        cart: cartReducer, // Add cart reducer
    },
});

