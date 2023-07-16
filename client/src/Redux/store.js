import {combineReducers, configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';

import  userReducer from './slices/userSlice'


const persistConfig = {
    key:'root',
    storage
}

const reducers = combineReducers({
    userReducer
    
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer:{
        persistedReducer
    },
    middleware:[logger],
    
})

export const persistor =persistStore(store);