import React, {FC} from 'react';
import {View} from 'react-native';

import styles from './styles/CartListItem.style';
import CartProductCard from '../../components/cartProductCard/CartProductCard';
import {ICartProduct} from '../../redux/cart/initialState/InitialState';

type CartListItemProps = {
  item: ICartProduct;
  deleteCartProductPress: (cartProduct: ICartProduct) => void;
};

export const CartListItem: FC<CartListItemProps> = ({
  item,
  deleteCartProductPress,
}) => (
  <View style={styles.item}>
    <CartProductCard
      cartProduct={item}
      deleteCartProductPress={() => deleteCartProductPress(item)}
    />
  </View>
);
