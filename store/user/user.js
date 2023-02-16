import { createSlice } from '@reduxjs/toolkit'
import user from '../../data/user';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    user: null,
    users: [],
  },
  reducers: {
    login(state, action) {
      const { payload } = action;
      state.user = payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
    register(state, action) {
      const { payload = {} } = action;
      const {
        firstName,
        lastName,
        email,
        password,
        acceptTermsAndPolicy,
      } = payload;

      const newUser = {
        id: state.users.length + 1,
        firstName,
        lastName,
        email,
        password,
        acceptTermsAndPolicy,
        ...user,
      };

      state.users.push(newUser);
    }
  }
})

export const selectUser = (state) => state.user;
export const selectUsers = (state) => state.user.users;


export const { login, logout, register } = userSlice.actions
export default userSlice.reducer
