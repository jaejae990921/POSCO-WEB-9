import { createSlice, configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import LoginSlice from './login';

// const init = {
//   counter: 0,
// };

// createSlice() : 리듀서와 액션을 함께 생성하는 함수
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: init,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     calc(state, action) {
//       // actio 객체에서 payload를 가져옴
//       //   console.log(action.payload);
//       const { plus, minus } = action.payload;
//       state.counter = state.counter + plus + minus;
//     },
//   },
// });

// const initLogin = {
//   isLogin: false,
// };

// const LoginSlice = createSlice({
//   name: 'login',
//   initialState: initLogin,
//   reducers: {
//     login(state) {
//       state.isLogin = true;
//     },
//     logout(state) {
//       state.isLogin = false;
//     },
//   },
// });

// configureStore() : 스토어 생성
const store = configureStore({
  reducer: { counte: counterSlice, login: LoginSlice },
});

// export const counterActions = counterSlice.actions; // 액션 생성자
// export const loginActions = LoginSlice.actions; // 액션 생성자

export default store;
