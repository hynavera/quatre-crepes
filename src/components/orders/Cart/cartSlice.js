import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    cartItems: [], // Initialize items as an empty array
  },

  reducers: {
    addItemToCart(state, action) {
      const existingItem = state.cartItems.find(
        item => item.name === action.payload.name
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push(
          { ...action.payload, quantity: 1 }
        );
      };
    },

    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.name !== action.payload
      );
    },
    
    increaseItemQuantity: (state, action) => {
      const itemToIncrease = state.cartItems.find(
        item => item.name === action.payload
      );
      if (itemToIncrease) {
        itemToIncrease.quantity +=1;
      }
    },

    decreaseItemQuantity: (state, action) => {
      return {
        ...state, 
        cartItems: state.cartItems.map((item) => {
          if (item.name === action.payload) {
            return {
              ...item, 
              quantity: item.quantity - 1 
            };
          }
          return item;
        }).filter((item) => item.quantity > 0) 
      };
    },

    clearCart(state) {
      state.cartItems = [];
    },

  },
});


export const { 
  addItemToCart, 
  removeItemFromCart, 
  increaseItemQuantity, 
  decreaseItemQuantity, 
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
