import React, {FC, useState} from 'react';
import {View, Text, TextInput} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button, {ButtonTypes} from '../../../components/button/Button';

import styles from './styles/Login.style';

const Login: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>LOGIN</Text>
      </View>
      <KeyboardAwareScrollView enableOnAndroid={true} bounces={false}>
        <View style={styles.formItem}>
          <Text style={styles.labelText}>Email</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Enter email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>
        <View style={styles.formItem}>
          <Text style={styles.labelText}>Password</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>
        <Button
          type={ButtonTypes.primary}
          text={'Login'}
          loading={loading}
          disabled={loading}
          action={() => console.log('action')}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;
