// src/store/productsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId) => {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await response.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.status = "succeeded";
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectProductById = (state, productId) =>
  state.products.items.find((product) => product.id === parseInt(productId));

export default productsSlice.reducer;
