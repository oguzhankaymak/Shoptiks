import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import {name as appName} from './app.json';

import {NavigationContainer} from '@react-navigation/native';
import Colors from './app/theme/Colors';
import Navigation from './app/containers/Navigation';
import {Provider} from 'react-redux';
import {persistor, store} from './app/redux/Store';
import {PersistGate} from 'redux-persist/integration/react';

const Root: FC = () => (
  <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  </SafeAreaView>
);

AppRegistry.registerComponent(appName, () => Root);
