import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import cartReducer from '../screens/Cart/cartSlice';
import categoryReducer from '../screens/Home/categorySlice';
import colorReducer from '../screens/Home/colorSlice';
import productReducer from '../screens/Home/productSlice';
import sizeReducer from '../screens/Home/sizeSlice';
import userReducer from './userSlice';
import orderReducer from '../screens/Order/orderSlice';

const persistConfig = {
  key: 'ShoesStore',
  storage: AsyncStorage,
  whitelist: ['cart', 'user', 'order'],
};

const rootReducer = combineReducers({
  color: colorReducer,
  cart: cartReducer,
  category: categoryReducer,
  size: sizeReducer,
  user: userReducer,
  products: productReducer,
  order: orderReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
export default store;
