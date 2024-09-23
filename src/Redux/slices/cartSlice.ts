import { createSlice } from '@reduxjs/toolkit';
import { CartSliceStateI, CartStateT } from '../slices/cartTypes';
import { PayloadAction } from '@reduxjs/toolkit';


const initialState:CartSliceStateI = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action:PayloadAction<CartStateT>) => {
      const comparisonItems = state.items.find((item) => item.id === action.payload.id);
      if (comparisonItems) {
        comparisonItems.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem(state, action: PayloadAction<number>) {
      const comparisonItems = state.items.find((item) => item.id === action.payload);
      if (comparisonItems) {
        comparisonItems.count--;
        if (comparisonItems.count <= 0) {
          state.items = state.items.filter((obj) => obj.id !== action.payload);
        }
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
  },
});

export const { addItem, minusItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
