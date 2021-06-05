import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const HomeStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
