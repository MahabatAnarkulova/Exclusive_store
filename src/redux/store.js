import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/productsSlice";
import { cartReducer } from "./slices/cartSlice";
import { likeReducer } from "./slices/likeSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    like: likeReducer,
  },
});

export default store;
