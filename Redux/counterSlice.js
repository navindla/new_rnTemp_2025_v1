
//////////// step:1 //////////////




import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',

  initialState: {
    value: 0,
    venkyVal: 1
  },

  reducers: {
    increment: state => {
      state.value += 1;
      console.log('--- incrmnt action: ',state);
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

// createSlice().reducer gives the reducer function.
// & exports it.