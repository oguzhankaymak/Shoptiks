import React, {FC, useState} from 'react';
import {View, Text, TextInput} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button, {ButtonTypes} from '../../../components/button/Button';
import {emailIsValid} from '../../../utilities/Function';
import {INVALID_EMAIL} from '../../../constans/Messages';

import styles from './styles/Login.style';

const Login: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const onChangeEmailText = (text: string) => {
    setEmail(text);
    if (emailIsValid(text)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>LOGIN</Text>
      </View>
      <KeyboardAwareScrollView enableOnAndroid={true} bounces={false}>
        <View style={styles.formItem}>
          <Text style={styles.labelText}>Email</Text>
          {email.length > 0 && !isValidEmail && (
            <Text style={styles.warningMessageText}>* {INVALID_EMAIL}</Text>
          )}
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Enter email"
              value={email}
              onChangeText={onChangeEmailText}
              autoCapitalize="none"
              keyboardType={'email-address'}
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
