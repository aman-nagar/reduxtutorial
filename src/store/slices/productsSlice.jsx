import { createSlice } from "@reduxjs/toolkit";
import { productsList } from "../productsList";

const slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    fetchProducts(state) {
      state.loading = true;
    },
    fetchProductsError(state, action) {
      state.loading = false;
      state.error = action.payload || "Somthing went wrong!";
    },
    updateAllProducts(state, action) {
      state.loading = false;
      state.list = action.payload;
      state.error = "";
    },
  },
});

export const { updateAllProducts, fetchProducts, fetchProductsError } =
  slice.actions;

export default slice.reducer;
