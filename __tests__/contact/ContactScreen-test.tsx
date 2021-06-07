import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import ContactScreen from '../../app/containers/bottomTab/contact/ContactScreen';

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = ({children}) => children;
  return {KeyboardAwareScrollView};
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const pressedCallback = jest.fn();

const setup = (placeholder: string) => {
  const {getByPlaceholderText, getByText} = render(<ContactScreen />);
  const input = getByPlaceholderText(placeholder);
  return {
    input,
    getByText,
  };
};

test('The warning message should be seen by user and the button should be disabled when the user enter invalid email', () => {
  // Full name check Utilities/Functions/fullNameIsValid
  const {input, getByText} = setup('Enter full name');

  fireEvent.changeText(input, 'Oguzhan');
  fireEvent.press(getByText('Send'));

  expect(getByText('* Invalid full name')).toBeTruthy();
  expect(pressedCallback).not.toBeCalled();
});

test('The warning message should be seen by user and the button should be disabled when the user enter invalid subject', () => {
  // Full name check Utilities/Functions/subjectIsValid
  const {input, getByText} = setup('Enter subject');
  fireEvent.changeText(input, 'abc');
  fireEvent.press(getByText('Send'));

  expect(getByText('* Subject must be min 4 characters')).toBeTruthy();
  expect(pressedCallback).not.toBeCalled();
});

test('The warning message should be seen by user and the button should be disabled when the user enter invalid message', () => {
  // Full name check Utilities/Functions/messageIsValid
  const {input, getByText} = setup('Enter message');

  fireEvent.changeText(input, 'Message');
  fireEvent.press(getByText('Send'));

  expect(getByText('* Message must be min 15 characters')).toBeTruthy();
  expect(pressedCallback).not.toBeCalled();
});
