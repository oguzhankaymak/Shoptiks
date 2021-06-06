import React, {FC} from 'react';
import {View} from 'react-native';

import styles from './styles/ProductListItem.style';
import ProductCard from '../../components/productCard';
import {IProduct} from '../../containers/bottomTab/homeStack/controllers/data';

type ProductCardProps = {
  item: IProduct;
  addToCartPress: (product: IProduct) => void;
  detailPress: () => void;
};

export const ProductListItem: FC<ProductCardProps> = ({
  item,
  addToCartPress,
  detailPress,
}) => (
  <View style={styles.item}>
    <ProductCard
      product={item}
      addToCartPress={(product: IProduct) => addToCartPress(product)}
      detailPress={detailPress}
    />
  </View>
);
