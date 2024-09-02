import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./services/Api";
import cartReducer from "./features/cartSlice";
import favoriteReducer from "./features/favoriteSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorite: favoriteReducer,
        [Api.reducerPath]: Api.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(Api.middleware)
    }
})

export default store;