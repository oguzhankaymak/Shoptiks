import React, {FC, useState} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';

import {useAppSelector, useAppDispatch} from '../../../redux/Hooks';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button, {ButtonTypes} from '../../../components/button/Button';
import {emailIsValid} from '../../../utilities/Function';
import {
  INVALID_EMAIL,
  INVALID_PASSWORD,
  ALERT_TITLE_WARNING,
} from '../../../constans/Messages';

import styles from './styles/Login.style';
import {loginAction} from '../../../redux/auth/actions/Actions';

const Login: FC = () => {
  const auth = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const onChangeEmailText = (text: string) => {
    setEmail(text);
    if (emailIsValid(text) && !isValidEmail) {
      setIsValidEmail(true);
    } else if (isValidEmail) {
      setIsValidEmail(false);
    }
  };

  const loginCheck = () => {
    let errorMessage;
    if (!email || email?.length === 0 || !isValidEmail) {
      errorMessage = INVALID_EMAIL;
    } else if (!password || password?.length === 0) {
      errorMessage = INVALID_PASSWORD;
    }

    errorMessage
      ? Alert.alert(ALERT_TITLE_WARNING + '!', errorMessage + '.', [
          {text: 'Okay', onPress: () => {}},
        ])
      : dispatch(loginAction(email) as any);
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
              secureTextEntry={true}
              autoCompleteType={'password'}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            type={ButtonTypes.primary}
            text={'Login'}
            loading={auth?.isLoading}
            disabled={auth?.isLoading}
            action={loginCheck}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;
