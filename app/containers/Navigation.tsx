import React, {FC} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {useAppSelector} from '../redux/Hooks';
import AuthNavigation from './auth/AuthNavigation';
import BottomTabNavigation from './bottomTab/BottomTabNavigation';

const Stack = createStackNavigator();

const Navigation: FC = () => {
  const auth = useAppSelector(state => state.authReducer);
  return (
    <Stack.Navigator headerMode="none">
      {auth.email ? (
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigation}
        />
      ) : (
        <Stack.Screen name="AuthNavigator" component={AuthNavigation} />
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
