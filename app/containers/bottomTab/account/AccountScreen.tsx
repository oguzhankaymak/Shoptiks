import React, {FC} from 'react';
import {View, Text} from 'react-native';

import styles from './style/AccountScreen.style';

const AccountScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
    </View>
  );
};

export default AccountScreen;
