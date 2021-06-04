import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';
import {deviceWidth, isTablet} from '../../../utilities/Metrics';

export default StyleSheet.create({
  button: {
    width: deviceWidth - 80,
    height: isTablet ? 50 : 35,
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: Colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: Colors.white,
  },
});
