import { createSlice, configureStore } from '@reduxjs/toolkit';

const init = {
  counter: 0,
};

// createSlice() : 리듀서와 액션을 함께 생성하는 함수
const counterSlice = createSlice({
  name: 'counter',
  initialState: init,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    calc(state, action) {
      // actio 객체에서 payload를 가져옴
      //   console.log(action.payload);
      const { plus, minus } = action.payload;
      state.counter = state.counter + plus + minus;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
