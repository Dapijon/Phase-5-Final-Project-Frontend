import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const allTransactionsSlice = createSlice(
  {
    name: 'allTransactions', 
    initialState: {
      transactions: [],
      isLoading: false,
      error: null,
    },
    reducers: {
      getAllTransactionsStart: (state) => {
        state.isLoading = true;
        state.error = null;
      },
      getAllTransactionsSuccess: (state, action) => {
        state.isLoading = false;
        state.allTransactions = action.payload;
      },
      getAllTransactionsFailure: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  }
);


export const { getAllTransactionsStart, getAllTransactionsSuccess, getAllTransactionsFailure } = allTransactionsSlice.actions;// Redux Thunk Functions to make API
// THUNK CREATORS

export const fetchAllTransactions = () => async (dispatch, getState) => {
  dispatch(getAllTransactionsStart());
  const { accessToken } = getState.auth;

  try {
    const response = await axios.get('http://127.0.0.1:5000/summary/all-transactions', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch(getAllTransactionsSuccess(response.data));
  }
  catch (error) {
    dispatch(getAllTransactionsFailure(error.message));
  }
  
};

export  default allTransactionsSlice.reducer;

