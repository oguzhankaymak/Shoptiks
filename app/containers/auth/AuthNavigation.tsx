import React, {FC} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './login/LoginScreen';

const AuthStack = createStackNavigator();

const AuthNavigation: FC = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
