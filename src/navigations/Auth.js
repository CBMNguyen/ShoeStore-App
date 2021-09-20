import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import {SCREEN_NAME} from '../constants/global';

const AuthStack = createNativeStackNavigator();

const AuthNAvigator = () => (
  <AuthStack.Navigator
    initialRouteName={SCREEN_NAME.Login}
    screenOptions={{headerShown: false}}>
    <AuthStack.Screen name={SCREEN_NAME.Login} component={Login} />
    <AuthStack.Screen name={SCREEN_NAME.SignUp} component={Signup} />
  </AuthStack.Navigator>
);

export default AuthNAvigator;
