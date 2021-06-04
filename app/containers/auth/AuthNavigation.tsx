import React, {FC} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Login from './login/Login';

const AuthStack = createStackNavigator();

const AuthNavigation: FC = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="LoginScreen" component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
