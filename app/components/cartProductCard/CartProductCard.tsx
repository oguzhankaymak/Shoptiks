import React, {FC} from 'react';
import {View, Text} from 'react-native';

import styles from './styles/CartProductCard.style';
import {ICartProduct} from '../../redux/cart/initialState/InitialState';
import {ProductInfo} from '../productCard/ProductInfo';
import Button, {ButtonTypes} from '../button/Button';

type CartProductProps = {
  cartProduct: ICartProduct;
  deleteCartProductPress: (cartProduct: ICartProduct) => void;
};

const Index: FC<CartProductProps> = ({cartProduct, deleteCartProductPress}) => {
  let deleteButtonName =
    cartProduct.quantity > 1 ? 'Decrease Quantity' : 'Delete Product';
  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleText}>{cartProduct.name}</Text>
        </View>
        <View style={styles.line} />
        <ProductInfo
          label={'Quantity'}
          value={cartProduct.quantity.toString()}
        />
        <ProductInfo
          label={'Unit Price'}
          value={cartProduct.unitPrice.toString()}
        />
        <View style={styles.footer}>
          <Button
            type={ButtonTypes.danger}
            text={deleteButtonName}
            action={() => deleteCartProductPress(cartProduct)}
          />
        </View>
      </View>
    </View>
  );
};

export default Index;
