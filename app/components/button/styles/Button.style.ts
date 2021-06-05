import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';
import {deviceWidth, isTablet} from '../../../utilities/Metrics';

export default {
  primary: StyleSheet.create({
    button: {
      width: deviceWidth - 85,
      height: isTablet ? 45 : 35,
      marginTop: 40,
      borderRadius: 10,
      backgroundColor: Colors.lightBlue,
      justifyContent: 'center',
      alignItems: 'center',
    },

    buttonText: {
      color: Colors.white,
    },
  }),
};
