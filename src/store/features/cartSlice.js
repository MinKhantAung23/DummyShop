import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartData: JSON.parse(localStorage.getItem('cartData')) || {
        products: [],
        totalQuantity: 0,
        totalAmount: 0,
    },
}
export const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProducts = state.cartData.products.find((product) => product.id === action.payload.id);
            if (existingProducts) {
                existingProducts.quantity += 1;
            } else {
                state.cartData.products.push({ ...action.payload, quantity: 1 });
            }
            state.cartData.totalQuantity += 1;
            state.cartData.totalAmount += action.payload.price;
            localStorage.setItem('cartData', JSON.stringify(state.cartData));
        },
        removeFromCart: (state, action) => {
            state.cartData.products = state.cartData.products.filter((product) => product.id !== action.payload.id);

            state.cartData.totalQuantity = state.cartData.products.reduce((total, item) => total + item.quantity, 0);
            state.cartData.totalAmount = state.cartData.products.reduce((total, item) => total + (item.price * item.quantity), 0);

            if (state.cartData.products.length === 0) {
                localStorage.removeItem('cartData');
            } else {
                localStorage.setItem('cartData', JSON.stringify(state.cartData));
            }
        },
        increaseQuantity: (state, action) => {
            const product = state.cartData.products.find((item) => item.id === action.payload.id);
            if (product) {
                product.quantity += 1;
                state.cartData.totalQuantity++;
                state.cartData.totalAmount += product.price;
                localStorage.setItem('cartData', JSON.stringify(state.cartData));
            }
        },
        decreaseQuantity: (state, action) => {
            const product = state.cartData.products.find((item) => item.id === action.payload.id);
            if (product) {
                if (product.quantity > 1) {
                    product.quantity -= 1;
                    state.cartData.totalQuantity--;
                    state.cartData.totalAmount -= product.price;
                    localStorage.setItem('cartData', JSON.stringify(state.cartData));
                } else {
                    state.cartData.products = state.products.filter((product) => product.id !== action.payload.id);
                    const removedProduct = state.cartData.products;
                    state.cartData.totalQuantity -= removedProduct.quantity;
                    state.cartData.totalAmount -= removedProduct.price * removedProduct.quantity;
                    localStorage.setItem('cartData', JSON.stringify(state.cartData));
                }

            }
        },
        clearCart: (state) => {
            state.cartData.products = [];
            state.cartData.totalQuantity = 0;
            state.cartData.totalAmount = 0;
            localStorage.removeItem('cartData');
        },
    }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer