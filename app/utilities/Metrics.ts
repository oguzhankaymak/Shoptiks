import {Dimensions} from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const isTabletCheck = () => {
  if (deviceHeight / deviceWidth > 1.6) {
    return false;
  } else {
    return true;
  }
};

export const isTablet = isTabletCheck();
