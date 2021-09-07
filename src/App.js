import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SCREEN_NAME} from './constants/global';
import Cart from './screens/Cart';
import Home from './screens/Home';
import Order from './screens/Order';
import Personal from './screens/Personal';
import Splash from './screens/Splash';
import Ionicons from 'react-native-vector-icons/Ionicons';

const rootStack = createNativeStackNavigator();
const rootTab = createBottomTabNavigator();

const TabNavigator = () => (
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
    <rootTab.Screen name="Home" component={Home} />
    <rootTab.Screen name="Cart" component={Cart} />
    <rootTab.Screen name="Order" component={Order} />
    <rootTab.Screen name="Personal" component={Personal} />
  </rootTab.Navigator>
);

export default function App() {
  return (
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
  );
}

const styles = StyleSheet.create({});
