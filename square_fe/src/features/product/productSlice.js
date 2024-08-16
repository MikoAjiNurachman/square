import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addProductsApi, fetchProducts, fetchProduct, updateProductsApi, deleteProductApi } from '../../api/api';

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async () => {
    const response = await fetchProducts();
    return response.data;
  }
);

export const getProduct = createAsyncThunk(
  'product/getProduct',
  async (id) => {
    const response = await fetchProduct(id);
    return response.data;
  }
);

export const addProducts = createAsyncThunk(
  'customer/addProducts',
  async (newProduct, {dispatch}) => {
    const response = await addProductsApi(newProduct)
    dispatch(getProducts())
    return response.data
  }
)

export const updateProducts = createAsyncThunk(
  'customer/updateProducts',
  async (data, {dispatch}) => {
    const response = await updateProductsApi(data.id, data.formData)
    dispatch(getProducts())
    return response.data
  }
)

export const deleteProduct = createAsyncThunk(
  'customer/deleteProduct',
  async (id,  {dispatch}) => {
    const response = await deleteProductApi(id)
    dispatch(getProducts())
    return response.message
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    resetStatus: (state) => {
      state.products = [];
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addProducts.fulfilled, (state, action) => {
        state.products.push(action.payload)
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        let index = state.products.findIndex(product => product.id === action.payload.id)
        if (index !== -1) {
          state.products[index] = action.payload
        } else {
          state.products.push(action.payload)
        }
      })
      .addCase(updateProducts.fulfilled, (state, action) => {
        let index = state.products.findIndex(product => product.id === action.payload.id)
        if (index !== -1) {
          state.products[index] = action.payload
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products.filter(product => product.id != action.payload)
      })
  },
});

export default productSlice.reducer;
