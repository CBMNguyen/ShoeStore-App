import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import Login from '../components/Login';
import {SCREEN_NAME} from '../constants/global';
import Cart from '../screens/Cart';
import Home from '../screens/Home';
import Order from '../screens/Order';
import Personal from '../screens/Personal';

const rootTab = createBottomTabNavigator();

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
      <rootTab.Screen name={SCREEN_NAME.Home} component={Home} />

      <rootTab.Screen
        options={{tabBarBadge: cart.length}}
        name="Cart"
        component={Cart}
      />

      <rootTab.Screen
        name={SCREEN_NAME.Order}
        component={token ? Order : Login}
      />

      <rootTab.Screen name="Personal" component={token ? Personal : Login} />
    </rootTab.Navigator>
  );
};

export default TabNavigator;
