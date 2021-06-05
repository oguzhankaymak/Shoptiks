import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import {name as appName} from './app.json';

import {NavigationContainer} from '@react-navigation/native';
import Colors from './app/theme/Colors';
import Navigation from './app/containers/Navigation';
import {GlobalProvider} from './app/context/Provider';

const Root: FC = () => (
  <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
    <GlobalProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </GlobalProvider>
  </SafeAreaView>
);

AppRegistry.registerComponent(appName, () => Root);
