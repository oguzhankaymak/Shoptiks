import React, {FC} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MainNavigation from './main/MainNavigation';
import {useAppSelector} from '../redux/Hooks';
import AuthNavigation from './auth/AuthNavigation';

const Stack = createStackNavigator();

const Navigation: FC = () => {
  const auth = useAppSelector(state => state.authReducer);
  return (
    <Stack.Navigator headerMode="none">
      {auth.email ? (
        <Stack.Screen name="MainNavigator" component={MainNavigation} />
      ) : (
        <Stack.Screen name="AuthNavigator" component={AuthNavigation} />
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
