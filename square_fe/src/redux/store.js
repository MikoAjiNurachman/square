import { configureStore } from '@reduxjs/toolkit';
import customerReducer from '../features/customer/customerSlice';
import productReducer from '../features/product/productSlice';
import transactionReducer from '../features/transaction/transactionSlice';

const store = configureStore({
  reducer: {
    customer: customerReducer,
    product: productReducer,
    transaction: transactionReducer,
  },
});

export default store;
