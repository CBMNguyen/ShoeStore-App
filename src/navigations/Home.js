import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREEN_NAME} from '../constants/global';
import Home from '../screens/Home';
import ProductItem from '../screens/ProductItem';
const ProductStack = createNativeStackNavigator();

const HomeNavigator = () => (
  <ProductStack.Navigator
    initialRouteName="Product"
    screenOptions={{headerShown: false}}>
    <ProductStack.Screen name="Product" component={Home} />

    <ProductStack.Screen
      component={ProductItem}
      name={SCREEN_NAME.ProductItem}
    />
  </ProductStack.Navigator>
);

export default HomeNavigator;
