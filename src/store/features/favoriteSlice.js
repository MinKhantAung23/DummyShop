import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
}
export const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            state.favorites.push(action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
        removeFromFavorite: (state, action) => {
            state.favorites = state.favorites.filter((product) => product.id !== action.payload.id);
            if (state.favorites.length === 0) {
                localStorage.removeItem('favorites');
            } else {
                localStorage.setItem('favorites', JSON.stringify(state.favorites));
            }
        },
    }
})

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer