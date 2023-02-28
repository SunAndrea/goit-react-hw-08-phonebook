import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { authReducer } from '../auth/auth-slice';
import { contactsReducer } from './contactSlice';
import { filterSlice } from './filterSlice';

const authConfig = {
  key: 'auth',
  storage,
  blacklist: ['user'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
    contacts: contactsReducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
