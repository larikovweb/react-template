import { createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../service/authService';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.token = null;

      authAPI.util.resetApiState();
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
