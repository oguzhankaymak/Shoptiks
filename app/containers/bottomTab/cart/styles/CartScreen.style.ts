import {StyleSheet} from 'react-native';
import Colors from '../../../../theme/Colors';
import Fonts from '../../../../theme/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  footer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.brightGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  completeOrderButton: {
    backgroundColor: Colors.carrotOrange,
    width: 120,
    padding: 7,
    borderRadius: 10,
  },

  completeOrderButtonText: {
    color: Colors.white,
  },

  totalPriceText: {
    color: Colors.carrotOrange,
    fontWeight: 'bold',
    fontSize: Fonts.size.h16,
  },

  emptyCartView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
