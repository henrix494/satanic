import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [], // Initialize as an empty array
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem(state, action) {
			const newItem = action.payload;

			// Check if the item already exists in the cart
			const existingItem = state.items.find(
				(item) => item.id === newItem.id && item.index === newItem.index
			);

			if (existingItem) {
				// If the item already exists, update the quantity (que)
				existingItem.que += newItem.que;
			} else {
				// If the item doesn't exist, add it to the cart
				state.items.push(newItem);
			}
		},
		removeItem(state, action) {
			const itempayload = action.payload;
			state.items = state.items.filter(
				(item) => item.id !== itempayload.id || item.index !== itempayload.index
			);
		},
	},
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
