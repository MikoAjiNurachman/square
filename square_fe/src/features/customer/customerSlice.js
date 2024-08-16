import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCustomers, addCustomersApi, deleteCustomersApi } from '../../api/api';

export const getCustomers = createAsyncThunk(
  'customer/getCustomers',
  async () => {
    const response = await fetchCustomers();
    return response.data;
  }
);

export const addCustomers = createAsyncThunk(
  'customer/addCustomers',
  async (newCustomer) => {
    const response = await addCustomersApi(newCustomer)
    return response.message
  }
)

export const deleteCustomers = createAsyncThunk(
  'customer/deleteCustomers',
  async (id,  {dispatch}) => {
    const response = await deleteCustomersApi(id)
    dispatch(getCustomers())
    return response.message
  }
)

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    customers: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    resetStatus: (state) => {
      state.customers = [];
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCustomers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCustomers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.customers = action.payload;
      })
      .addCase(getCustomers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCustomers.fulfilled, (state, action) => {
        state.customers.push(action.payload)       
      })
      .addCase(deleteCustomers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.customers.filter(product => product.id != action.payload)
      })
  },
});

export default customerSlice.reducer;
