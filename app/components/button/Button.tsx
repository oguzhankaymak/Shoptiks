import React, {FC} from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import Colors from '../../theme/Colors';

import styles from './styles/Button.style';

export enum ButtonTypes {
  primary = 'primary',
}

type Props = {
  type: ButtonTypes;
  text: string;
  action: () => void;
  loading: boolean;
  disabled: boolean;
};

const Button: FC<Props> = ({type, text, action, loading, disabled}) => {
  return (
    <TouchableOpacity
      style={styles[type].button}
      onPress={action}
      disabled={loading || disabled}>
      {loading ? (
        <ActivityIndicator size={'small'} color={Colors.white} />
      ) : (
        <Text style={styles[type].buttonText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
