import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const allTransactionsSummarySlice = createSlice(
  {
    name: 'allTransactionsSummary', 
    initialState: {
      summary: {},
      isLoading: false,
      error: null,
    },
    reducers: {
      getAllTransactionsSummaryStart: (state) => {
        state.isLoading = true;
        state.error = null;
      },
      getAllTransactionsSummarySuccess: (state, action) => {
        state.isLoading = false;
        state.summary = action.payload;
      },
      getAllTransactionsSummaryFailure: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  }
);


export const { getAllTransactionsSummaryStart, getAllTransactionsSummarySuccess, getAllTransactionsSummaryFailure } = allTransactionsSummarySlice.actions;// Redux Thunk Functions to make API
// THUNK CREATORS

export const fetchAllTransactionsSummary = () => async (dispatch, getState) => {
  dispatch(getAllTransactionsSummaryStart());
  const { accessToken } = getState.auth;

  try {
    const response = await axios.get('http://127.0.0.1:5000/summary/transactions/summary', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch(getAllTransactionsSummarySuccess(response.data));
  }
  catch (error) {
    dispatch(getAllTransactionsSummaryFailure(error.message));
  }
  
};

export  default allTransactionsSummarySlice.reducer;

