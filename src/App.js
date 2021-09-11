import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './app/store';
import Loading from './components/Loading';
import Login from './components/Login';
import Signup from './components/Signup';
import {SCREEN_NAME} from './constants/global';
import Cart from './screens/Cart';
import Home from './screens/Home';
import Order from './screens/Order';
import Personal from './screens/Personal';
import ProductItem from './screens/ProductItem';
import Splash from './screens/Splash';

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const rootStack = createNativeStackNavigator();
const rootTab = createBottomTabNavigator();
const ProductStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const HomeNavigator = () => (
  <ProductStack.Navigator
    initialRouteName="Product"
    screenOptions={{headerShown: false}}>
    <ProductStack.Screen name="Product" component={Home} />
    <ProductStack.Screen
      name={SCREEN_NAME.ProductItem}
      component={ProductItem}
    />
  </ProductStack.Navigator>
);

const AuthNAvigator = () => (
  <AuthStack.Navigator
    initialRouteName={SCREEN_NAME.Login}
    screenOptions={{headerShown: false}}>
    <AuthStack.Screen name={SCREEN_NAME.Login} component={Login} />
    <AuthStack.Screen name={SCREEN_NAME.SignUp} component={Signup} />
  </AuthStack.Navigator>
);

const TabNavigator = () => {
  const {cart} = useSelector(state => state.cart);
  const {token} = useSelector(state => state.user);
  return (
    <rootTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, size, color}) => {
          let iconName;

          if (route.name === SCREEN_NAME.Home) {
            iconName = 'home';
            size = focused ? 30 : 25;
          }

          if (route.name === SCREEN_NAME.Cart) {
            iconName = 'cart';
            size = focused ? 30 : 25;
          }

          if (route.name === SCREEN_NAME.Order) {
            iconName = 'newspaper';
            size = focused ? 30 : 25;
          }

          if (route.name === SCREEN_NAME.Personal) {
            iconName = 'person-circle';
            size = focused ? 30 : 25;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#db2777',
      })}>
      <rootTab.Screen name={SCREEN_NAME.Home} component={HomeNavigator} />
      <rootTab.Screen
        options={{tabBarBadge: cart.length}}
        name="Cart"
        component={Cart}
      />
      <rootTab.Screen
        name={SCREEN_NAME.Order}
        component={token ? Order : AuthNAvigator}
      />
      <rootTab.Screen name={SCREEN_NAME.Personal} component={Personal} />
    </rootTab.Navigator>
  );
};

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
            </rootStack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </NativeBaseProvider>
    </Provider>
  );
}
