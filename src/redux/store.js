// third-party
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, createTransform } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
// reducer import
import reducers from './combineReducer';

import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import { isAuthenticated } from './reducers/auth/auth.slice';
import CryptoJS from 'crypto-js';
import { encryptTransform } from 'redux-persist-transform-encrypt';



const encrypt = createTransform(
  (inboundState, key) => {
    if (!inboundState) return inboundState;
    
    if (store.getState().auth.isAuthenticated || JSON.parse(localStorage.getItem('passCode'))) {
      const cryptedText = CryptoJS.AES.encrypt(JSON.stringify(inboundState), JSON.parse(localStorage.getItem('passCode')))
      return cryptedText.toString();
    }
    // const cryptedText = CryptoJS.AES.encrypt(JSON.stringify(inboundState), store.getState().auth.passCode);
    // return cryptedText.toString();
  },
  (outboundState, key) => {
    if (!outboundState) return outboundState;
   
    if (store.getState().auth.isAuthenticated || JSON.parse(localStorage.getItem('passCode'))) {
      const bytes = CryptoJS.AES.decrypt(outboundState, JSON.parse(localStorage.getItem('passCode')))
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      console.log(decrypted, "decrypted")
      return JSON.parse(decrypted);
    }

    // const bytes = CryptoJS.AES.decrypt(outboundState, store.getState().auth.passCode);
    // const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    // return JSON.parse(decrypted);

  },

);


const persistConfig = {
  key: 'secure',
  storage,
  whitelist: ['auth'],
  stateReconciler: autoMergeLevel1,
  transforms: [encrypt],
};


const persistedReducer = persistReducer(persistConfig, reducers);

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    // immutableCheck: false,
    // thunk: false

  }),
});


const { dispatch, getState } = store;

export { store, dispatch, getState };

export const persistor = persistStore(store)

