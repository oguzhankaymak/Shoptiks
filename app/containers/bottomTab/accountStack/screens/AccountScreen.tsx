import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles/AccountScreen.style';
import {ArrowRightIcon} from '../../../../components/icons';

const AccountScreen: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Account</Text>
      </View>
      <View style={styles.option}>
        <TouchableOpacity style={styles.shadow}>
          <View style={styles.button}>
            <Text>Last Orders</Text>
            <ArrowRightIcon size={24} />
          </View>
        </TouchableOpacity>
        <View style={styles.option}>
          <TouchableOpacity style={styles.shadow}>
            <View style={styles.button}>
              <Text>Profile</Text>
              <ArrowRightIcon size={24} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AccountScreen;
