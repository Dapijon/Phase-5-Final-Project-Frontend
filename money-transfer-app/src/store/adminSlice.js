import { createSlice } from "@reduxjs/toolkit";


const adminSlice = createSlice({
    name: 'admin',
    initialState: {
      users: [],
      transactions: [],
    },
    reducers: {
      createUser: (state, action) => {
        state.users.push(action.payload);
      },
      updateUser: (state, action) => {
        const { id, user } = action.payload;
        const index = state.users.findIndex((u) => u.id === id);
        state.users[index] = user;
      },
      deleteUser: (state, action) => {
        state.users = state.users.filter((u) => u.id !== action.payload);
      },
      addTransaction: (state, action) => {
        state.transactions.push(action.payload);
      },
    },
});
  

export const {
    createUser,
    updateUser,
    deleteUser,
    addTransaction,
  } = adminSlice.actions;


  export default adminSlice;
