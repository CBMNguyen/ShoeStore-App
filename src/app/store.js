import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import productReducer from '../screens/Home/productSlice';
import categoryReducer from '../screens/Home/categorySlice';
import colorReducer from '../screens/Home/colorSlice';
import sizeReducer from '../screens/Home/sizeSlice';
import cartReducer from '../screens/Cart/cartSlice';

const rootReducer = combineReducers({
  color: colorReducer,
  cart: cartReducer,
  category: categoryReducer,
  size: sizeReducer,
  products: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
