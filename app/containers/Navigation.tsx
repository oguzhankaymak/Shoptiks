import React, {FC, useContext} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigation from './auth/AuthNavigation';
import MainNavigation from './main/MainNavigation';
import {GlobalContext} from '../context/Provider';

const Stack = createStackNavigator();

const Navigation: FC = () => {
  const {authDispatch, authState} = useContext<any | null>(GlobalContext);
  return (
    <Stack.Navigator headerMode="none">
      {authState.email ? (
        <Stack.Screen name="MainNavigator" component={MainNavigation} />
      ) : (
        <Stack.Screen name="AuthNavigator" component={AuthNavigation} />
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
