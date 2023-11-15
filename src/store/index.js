import { configureStore } from '@reduxjs/toolkit';
import { rootApi } from './rootApi';

const isProduction = process.env.NODE_ENV === 'production';

const store = configureStore({
  reducer: {
    [rootApi.reducerPath]: rootApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApi.middleware),
  devTools: !isProduction
});

export default store;
