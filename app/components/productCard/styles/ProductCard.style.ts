import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';
import Fonts from '../../../theme/Fonts';
import {deviceWidth} from '../../../utilities/Metrics';

const CARD_WIDTH = deviceWidth - 85;

export default StyleSheet.create({
  shadow: {
    flex: 1,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 10,
  },

  container: {
    width: CARD_WIDTH,
    minHeight: 250,
    backgroundColor: Colors.white,
    elevation: 6,
    borderRadius: 10,
  },

  header: {
    paddingTop: 10,
    alignItems: 'center',
  },

  titleText: {
    fontSize: Fonts.size.h18,
    fontWeight: 'bold',
  },

  line: {
    marginVertical: 10,
    width: CARD_WIDTH,
    height: 0.5,
    backgroundColor: Colors.gray,
  },

  detailView: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  detailText: {
    fontSize: Fonts.size.h15,
  },

  productInfoView: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },

  productInfoLabelText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  productInfoValueText: {
    fontSize: Fonts.size.h15,
  },

  footer: {
    marginTop: 20,
    alignItems: 'center',
  },

  addToCartButton: {
    marginTop: 5,
  },
});
