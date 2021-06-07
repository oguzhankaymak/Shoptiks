import {StyleSheet} from 'react-native';
import Fonts from '../../../theme/Fonts';

export default StyleSheet.create({
  productInfoView: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },

  productInfoLabelText: {
    fontSize: Fonts.size.h16,
    fontWeight: 'bold',
  },

  productInfoValueText: {
    fontSize: Fonts.size.h15,
  },
});
