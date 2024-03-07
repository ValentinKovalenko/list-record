import { setupListeners } from '@reduxjs/toolkit/query'
import recordSlice from './listRecordSlice/listRecordSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({ 'record': recordSlice })

const persistConfig = {
  'key': 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  'reducer': persistedReducer,
  'middleware': (getDefaultMiddleware) => getDefaultMiddleware({
    'serializableCheck': {
      'ignoredActions': [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
