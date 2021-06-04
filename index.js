import React, {FC} from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import {name as appName} from './app.json';
import App from './app/app';
import Colors from './app/theme/Colors';

const Root: FC = () => (
  <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
    <App />
  </SafeAreaView>
);

AppRegistry.registerComponent(appName, () => Root);
