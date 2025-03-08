import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import portfolioSlice  from '../features/Portfolio.js'
 

const persistConfig = {
    key: 'portfolio',
    storage,
  }
 
  const persistedReducer = persistReducer(persistConfig, portfolioSlice)

export const store = configureStore({
  reducer: {
    portfolio:persistedReducer,
  },
  middleware:(getDefaultMiddleWare)=>getDefaultMiddleWare({serializableCheck:false})
})

export const persistor = persistStore(store)