import React, {FC} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './homeStack/HomeStack';
import ContactScreen from './contact/ContactScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigation: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{tabBarLabel: 'Contact'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
