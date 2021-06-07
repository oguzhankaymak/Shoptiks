import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Provider} from 'react-redux';
import {store} from '../../app/redux/Store';
import Login from '../../app/containers/auth/login/LoginScreen';

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = ({children}) => children;
  return {KeyboardAwareScrollView};
});

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

test('The warning message should be seen by user and the button should be disabled when the user enter invalid email', () => {
  // Full name check Utilities/Functions/emailIsValid
  const {getByPlaceholderText, getByText} = render(
    <Provider store={store}>
      <Login />
    </Provider>,
  );

  const emailInput = getByPlaceholderText('Enter email');
  fireEvent.changeText(emailInput, 'oguzhan');

  expect(getByText('* Please enter a valid email address')).toBeTruthy();
});

test('The button should be disabled  when user enter invalid email or password is empty', () => {
  const {getByPlaceholderText, getByText} = render(
    <Provider store={store}>
      <Login />
    </Provider>,
  );

  const emailInput = getByPlaceholderText('Enter email');
  fireEvent.changeText(emailInput, 'oguzhan');

  const pressedCallback = jest.fn();

  fireEvent.press(getByText('Login'));
  expect(pressedCallback).not.toBeCalled();
});
