import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    user: null,
    wallet: {
      balance: 0,
      transactions: [],
    },
    profile: {
      name: '',
      email: '',
      phoneNumber: '',
    },
    beneficiaries: [],
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    updateProfile: (state, action) => {
      state.profile = action.payload;
    },
    addFunds: (state, action) => {
      state.wallet.balance += action.payload;
      state.wallet.transactions.push({
        type: 'deposit',
        amount: action.payload,
        timestamp: new Date(),
      });
    },
    addBeneficiary: (state, action) => {
      state.beneficiaries.push(action.payload);
    },
    sendMoney: (state, action) => {
      const { amount, beneficiary } = action.payload;
      state.wallet.balance -= amount;
      state.wallet.transactions.push({
        type: 'withdrawal',
        amount,
        beneficiary,
        timestamp: new Date(),
      });
    },
  },
});

export const {
    login,
    logout,
    updateProfile,
    addFunds,
    addBeneficiary,
    sendMoney,
} = userSlice.actions;

export default userSlice;