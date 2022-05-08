import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    // increment: state => state.count += 1,
    increment:(state) => {
        // state.count.push(action.payload)
        state.count += 1
    }
  }
})

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;