import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREEN_NAME} from '../constants/global';
import OrderHistory from '../screens/OrderHistory';
import Personal from '../screens/Personal';

const PersonalStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();

const PersonalNavigator = () => (
  <PersonalStack.Navigator
    initialRouteName="Personal"
    screenOptions={{headerShown: false}}>
    <ProductStack.Screen
      name={SCREEN_NAME.Personal + '1'}
      component={Personal}
    />
    <ProductStack.Screen
      name={SCREEN_NAME.OrderHistory}
      component={OrderHistory}
    />
  </PersonalStack.Navigator>
);

export default PersonalNavigator;
