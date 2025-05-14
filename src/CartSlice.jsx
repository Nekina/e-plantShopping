import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => { //Payload is a plant object
        const { name, image, cost } = action.payload; //Destructuring, omitting description property
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++; //If item already exists, increment its quantity property
        }
        else {
            state.items.push({ name, image, cost, quantity: 1 }) //Creates new object with quantity property initialized to 1
        }
    },
    removeItem: (state, action) => { //Payload is a plant name
        state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => { //Payload is a plant object
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
