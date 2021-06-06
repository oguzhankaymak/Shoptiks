import React, {FC} from 'react';
import {View, Text} from 'react-native';

import styles from './styles/ProductInfo.style';

type ProductInfoProps = {
  label: string;
  value: string;
};

export const ProductInfo: FC<ProductInfoProps> = ({label, value}) => (
  <View style={styles.productInfoView}>
    <Text style={styles.productInfoLabelText}>{label}:</Text>
    <Text style={styles.productInfoValueText}> {value}</Text>
  </View>
);
