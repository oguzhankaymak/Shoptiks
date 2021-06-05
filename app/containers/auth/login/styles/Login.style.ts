import {StyleSheet} from 'react-native';
import Colors from '../../../../theme/Colors';
import Fonts from '../../../../theme/Fonts';
import {deviceWidth, isTablet} from '../../../../utilities/Metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },

  header: {
    paddingTop: 100,
  },

  titleText: {
    fontSize: Fonts.size.h23,
    fontWeight: 'bold',
  },

  formItem: {
    alignItems: 'center',
    marginTop: 40,
  },

  inputView: {
    width: deviceWidth - 85,
    borderWidth: 1,
    borderColor: Colors.lightBlue,
    borderRadius: 50,
    justifyContent: 'center',
    paddingHorizontal: 3,
    marginTop: 6,
  },

  labelText: {
    fontSize: Fonts.size.h20,
    color: Colors.gray,
    fontWeight: 'bold',
  },

  input: {
    fontSize: Fonts.size.h18,
    color: Colors.gray,
    padding: isTablet ? 20 : 8,
  },

  warningMessageText: {
    marginTop: 10,
    color: Colors.darkRed,
    fontSize: Fonts.size.h15,
  },
});
