import {deviceWidth} from '../../../../../utilities/Metrics';
import {StyleSheet} from 'react-native';
import Colors from '../../../../../theme/Colors';
import Fonts from '../../../../../theme/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },

  header: {
    paddingTop: 30,
  },

  titleText: {
    fontSize: Fonts.size.h20,
  },

  page: {
    marginTop: 30,
  },

  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 10,
  },

  button: {
    width: deviceWidth - 150,
    minHeight: 50,
    backgroundColor: Colors.white,
    elevation: 6,
    borderRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  option: {
    marginTop: 30,
  },
});
