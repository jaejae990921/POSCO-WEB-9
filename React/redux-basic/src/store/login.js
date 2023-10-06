import { createSlice } from '@reduxjs/toolkit';

const initLogin = {
  isLogin: false,
};

const LoginSlice = createSlice({
  name: 'login',
  initialState: initLogin,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

export const loginActions = LoginSlice.actions;
export default LoginSlice.reducer;
