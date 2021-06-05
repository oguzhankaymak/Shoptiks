import React, {FC} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigation from './bottomTab/BottomTabNavigation';

const MainStack = createStackNavigator();

const MainNavigation: FC = () => {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigation}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
