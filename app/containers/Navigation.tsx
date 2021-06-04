import React, {FC} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigation from './auth/AuthNavigation';

const Stack = createStackNavigator();

const Navigation: FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="AuthNavigator" component={AuthNavigation} />
    </Stack.Navigator>
  );
};

export default Navigation;
