import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './reducer';
import { contactsApi } from './contactsSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    // contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ]
});

setupListeners(store.dispatch);