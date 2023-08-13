import { configureStore } from "@reduxjs/toolkit";
import addItem from "../features/CartSlice";
const store = configureStore({
	reducer: { cart: addItem },
});
export default store;
