// analyticsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const analyticsSlice = createSlice({
  name: 'analytics',
  initialState: {
    transactions: [],
    loading: true,
    error: null,
  },
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = action.payload;
      state.loading = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.transactions = [];
      state.loading = false;
      state.error = action.payload;
    },
    setLoading: (state) => {
      state.transactions = [];
      state.loading = true;
      state.error = null;
    },
  },
});

export const { setTransactions, setError, setLoading } = analyticsSlice.actions;

export const selectTransactions = (state) => state.analytics.transactions;
export const selectLoading = (state) => state.analytics.loading;
export const selectError = (state) => state.analytics.error;

export default analyticsSlice.reducer;
