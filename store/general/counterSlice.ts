import { createSlice } from "@reduxjs/toolkit";

const counterReducer = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment(state, action) {
      return state + 1;
    },
    addTwo(state, action) {
      return state + 2;
    },
  },
});

const { actions, reducer } = counterReducer;

export const { increment, addTwo } = actions;

export default reducer;
