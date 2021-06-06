import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from './screens/AccountScreen';

const Stack = createStackNavigator();

const AccountStack: FC = () => {
  return (
    <Stack.Navigator headerMode={'screen'}>
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
