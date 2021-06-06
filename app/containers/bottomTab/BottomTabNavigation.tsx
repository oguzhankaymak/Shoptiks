import React, {FC} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './homeStack/HomeStack';
import ContactScreen from './contact/ContactScreen';
import {CartIcon, ContactIcon, HomeIcon} from '../../components/icons';
import CartScreen from './cart/CartScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigation: FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {height: 50},
        tabStyle: {height: 50},
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return (
              <HomeIcon
                stroke={color}
                color={color}
                width={size}
                height={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => {
            return (
              <CartIcon
                stroke={color}
                color={color}
                width={size}
                height={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({color, size}) => {
            return (
              <ContactIcon
                stroke={color}
                color={color}
                width={size}
                height={size}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
