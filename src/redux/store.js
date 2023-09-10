import { combineReducers } from 'redux';
import contactsReducer from './slice';
import { configureStore } from '@reduxjs/toolkit';
// import { contactsApi } from 'api/fetch';
// import { setupListeners } from '@reduxjs/toolkit/query'
// import { fetchContactsThunk } from './thunk';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//   key: 'contactsBook',
//   storage,
//   blacklist: ['filter'],
// };

const rootReducer = combineReducers({
  contactsBook: contactsReducer,
  // [contactsApi.reducerPath]: contactsApi.reducer,
});
// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(contactsApi.middleware),
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
});
// setupListeners(store.dispatch)
// export const persistor = persistStore(store);
