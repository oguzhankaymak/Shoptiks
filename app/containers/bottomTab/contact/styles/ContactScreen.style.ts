import {deviceWidth} from './../../../../utilities/Metrics';
import {StyleSheet} from 'react-native';
import Colors from '../../../../theme/Colors';
import Fonts from '../../../../theme/Fonts';
import {isTablet} from '../../../../utilities/Metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  header: {
    paddingTop: 30,
    alignItems: 'center',
  },

  titleText: {
    fontSize: Fonts.size.h20,
  },

  formItem: {
    marginLeft: 30,
    marginTop: 40,
  },

  inputView: {
    width: deviceWidth - 85,
    borderWidth: 1,
    borderColor: Colors.lightBlue,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 3,
    marginTop: 6,
  },

  labelText: {
    fontSize: Fonts.size.h16,
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

  multilineInput: {
    fontSize: Fonts.size.h18,
    color: Colors.gray,
    height: 150,
    textAlignVertical: 'top',
  },

  footer: {
    marginLeft: 30,
    marginVertical: 40,
  },
});
