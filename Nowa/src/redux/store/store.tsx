import { configureStore } from "@reduxjs/toolkit";

import rootred from "../reducers/main";

const store = configureStore({
  reducer: rootred,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
