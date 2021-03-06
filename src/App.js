import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './app/store';
import Loading from './components/Loading';
import Login from './components/Login';
import Signup from './components/Signup';
import {SCREEN_NAME} from './constants/global';
import TabNavigator from './navigations/TabBottom';
import OrderHistory from './screens/OrderHistory';
import ProductItem from './screens/ProductItem';
import Splash from './screens/Splash';

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const rootStack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider config={config}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <NavigationContainer>
            <rootStack.Navigator
              initialRouteName="Splash"
              screenOptions={{
                headerShown: false,
              }}>
              <rootStack.Screen name={SCREEN_NAME.Splash} component={Splash} />
              <rootStack.Screen name="Main" component={TabNavigator} />
              <rootStack.Screen
                component={ProductItem}
                name={SCREEN_NAME.ProductItem}
              />
              <rootStack.Screen name={SCREEN_NAME.Login} component={Login} />
              <rootStack.Screen name={SCREEN_NAME.SignUp} component={Signup} />

              <rootStack.Screen
                name={SCREEN_NAME.OrderHistory}
                component={OrderHistory}
              />
            </rootStack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </NativeBaseProvider>
    </Provider>
  );
}
