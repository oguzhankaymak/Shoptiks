import React, {useState} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';

import styles from './styles/ContactScreen.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button, {ButtonTypes} from '../../../components/button/Button';
import {
  fullNameIsValid,
  subjectIsValid,
  messageIsValid,
} from '../../../utilities/Function';

const ContactScreen = () => {
  const [fullname, setFullName] = useState<string>('');
  const [fullNameStatus, setFullNameStatus] = useState<boolean>(false);

  const [subject, setSubject] = useState<string>('');
  const [subjectStatus, setSubjectStatus] = useState<boolean>(false);

  const [message, setMessage] = useState<string>('');
  const [messageStatus, setMessageStatus] = useState<boolean>(false);

  const _checkFullName = () => {
    if (!fullNameStatus && fullname.length > 0) {
      return <Text style={styles.warningMessageText}>* Invalid full name</Text>;
    }
  };

  const _checkSubject = () => {
    if (!subjectStatus && subject.length > 0) {
      return (
        <Text style={styles.warningMessageText}>
          * Subject must be min 4 characters
        </Text>
      );
    }
  };

  const _checkMessage = () => {
    if (!messageStatus && message.length > 0) {
      return (
        <Text style={styles.warningMessageText}>
          * Message must be min 15 characters
        </Text>
      );
    }
  };

  const onChangeFullName = (text: string) => {
    //first character can't be empty
    if (text.length === 1 && text === ' ') {
      return;
    } else if (!fullNameIsValid(text)) {
      if (fullNameStatus) {
        setFullNameStatus(false);
      }
    } else if (!fullNameStatus) {
      setFullNameStatus(true);
    }
    setFullName(text);
  };

  const onChangeSubject = (text: string) => {
    //first character can't be empty
    if (text.length === 1 && text === ' ') {
      return;
    }
    if (!subjectIsValid(text)) {
      if (subjectStatus) {
        setSubjectStatus(false);
      }
    } else if (!subjectStatus) {
      setSubjectStatus(true);
    }
    setSubject(text);
  };

  const onChangeMessage = (text: string) => {
    //first character can't be empty
    if (text.length === 1 && text === ' ') {
      return;
    }
    if (!messageIsValid(text)) {
      if (messageStatus) {
        setMessageStatus(false);
      }
    } else if (!messageStatus) {
      setMessageStatus(true);
    }
    setMessage(text);
  };

  const clearForm = () => {
    setFullName('');
    setSubject('');
    setMessage('');
    setFullNameStatus(false);
    setSubjectStatus(false);
    setMessageStatus(false);
  };

  const sendMessage = () => {
    clearForm();
    return Alert.alert('Successful!', 'Message sent successfully.', [
      {text: 'Okay', onPress: () => {}},
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Contact Us</Text>
      </View>
      <KeyboardAwareScrollView enableOnAndroid={true} bounces={false}>
        <View style={styles.formItem}>
          <Text style={styles.labelText}>Full Name</Text>
          {_checkFullName()}
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Enter full name"
              value={fullname}
              onChangeText={onChangeFullName}
              maxLength={24}
            />
          </View>
        </View>
        <View style={styles.formItem}>
          <Text style={styles.labelText}>Subject</Text>
          {_checkSubject()}
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Enter subject"
              value={subject}
              onChangeText={onChangeSubject}
              maxLength={24}
            />
          </View>
        </View>
        <View style={styles.formItem}>
          <Text style={styles.labelText}>Message</Text>
          {_checkMessage()}
          <View style={styles.inputView}>
            <TextInput
              style={styles.multilineInput}
              placeholder="Enter message"
              value={message}
              onChangeText={onChangeMessage}
              multiline={true}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            type={ButtonTypes.primary}
            text={'Send'}
            disabled={!fullNameStatus || !subjectStatus || !messageStatus}
            action={() => sendMessage()}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ContactScreen;
