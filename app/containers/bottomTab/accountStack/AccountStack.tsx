import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from './screens/AccountScreen';
import LastOrdersScreen from './screens/LastOrdersScreen';

const Stack = createStackNavigator();

const AccountStack: FC = () => {
  return (
    <Stack.Navigator headerMode={'screen'}>
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="LastOrdersScreen" component={LastOrdersScreen} />
    </Stack.Navigator>
  );
};

export default AccountStack;
