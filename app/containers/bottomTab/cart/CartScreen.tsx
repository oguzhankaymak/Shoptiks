import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles/CartScreen.style';
import {useAppSelector} from '../../../redux/Hooks';
import CartList from '../../../components/cartList/Index';
import {ICartProduct} from '../../../redux/cart/initialState/InitialState';
import {calcuateTotalPrice} from '../../../utilities/Function';

const CartScreen = () => {
  const cart = useAppSelector(state => state.cartReducer.cartItem);

  const _renderContent = () => {
    if (cart && Array.isArray(cart) && cart.length > 0) {
      return (
        <CartList
          data={cart}
          deleteCartProductPress={(cartProduct: ICartProduct) =>
            console.log(cartProduct)
          }
        />
      );
    }
    return <Text>Cart is empty</Text>;
  };

  const _renderFooter = () => {
    if (cart && Array.isArray(cart) && cart.length > 0) {
      return (
        <View style={styles.footer}>
          <Text style={styles.totalPriceText}>
            Total: {calcuateTotalPrice(cart)}$
          </Text>
          <TouchableOpacity style={styles.completeOrderButton}>
            <Text style={styles.completeOrderButtonText}>Complete Order</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {_renderContent()}
      {_renderFooter()}
    </View>
  );
};

export default CartScreen;
