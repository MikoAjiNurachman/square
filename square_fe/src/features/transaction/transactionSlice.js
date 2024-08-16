import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTransactions } from '../../api/api';

export const getTransactions = createAsyncThunk(
  'transaction/getTransactions',
  async (payload) => {
    const response = await fetchTransactions(payload);
    return response.data;
  }
);

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    response: {
      customer:{},
      listTransactions:[]
    },
    status: 'idle',
    error: null,
  },
  reducers: {
    resetStatus: (state) => {
      state.response = {};
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTransactions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.response = action.payload;
      })
      .addCase(getTransactions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { resetStatus } = transactionSlice.actions;

export default transactionSlice.reducer;
