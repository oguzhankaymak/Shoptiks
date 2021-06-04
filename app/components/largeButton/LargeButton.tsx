import React, {FC} from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import Colors from '../../theme/Colors';

import styles from './styles/LargeButton.style';

type Props = {
  text: string;
  action: () => void;
  loading: boolean;
  disabled: boolean;
};

const LargeButton: FC<Props> = ({text, action, loading, disabled}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={action}
      disabled={loading || disabled}>
      {loading ? (
        <ActivityIndicator size={'small'} color={Colors.white} />
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default LargeButton;
