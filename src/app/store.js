import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../services/authSlice';
import { authApi } from '../services/authApi';
import { advertsApi } from '../services/advertsApi';
import { setupListeners } from '@reduxjs/toolkit/query/react';



const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [advertsApi.reducerPath]: advertsApi.reducer,
    // Add other reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(authApi.middleware)
    .concat(advertsApi.middleware)
    // devTools: true,
});

setupListeners(store.dispatch);


export default store;