import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/features/counter/counterSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

import { productApi } from "./service/product";

console.log(productApi.reducerPath,productApi,productApi.reducer)

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    [productApi.reducerPath]:productApi.reducer
  },

  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productApi.middleware)
});

setupListeners(store.dispatch)
