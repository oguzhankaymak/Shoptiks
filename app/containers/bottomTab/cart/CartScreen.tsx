import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

import styles from './styles/CartScreen.style';
import {useAppDispatch, useAppSelector} from '../../../redux/Hooks';
import CartList from '../../../components/cartList/CartList';
import {ICartProduct} from '../../../redux/cart/initialState/InitialState';
import {calcuateTotalPrice} from '../../../utilities/Function';
import {deleteProductFromCartAction} from '../../../redux/cart/actions/Actions';
import {CartActionTypes} from '../../../redux/cart/types/ActionTypes';

const CartScreen = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cartReducer.cartItem);

  const checkCompeteOrder = () => {
    return Alert.alert(
      'Are You Sure?',
      `The total price of your cart is ${calcuateTotalPrice(
        cart,
      )}$. Are you sure to complete your order?`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => completeOrder()},
      ],
    );
  };

  const completeOrder = () => {
    dispatch({type: CartActionTypes.CLEAR_CART});
  };

  const _renderContent = () => {
    if (cart && Array.isArray(cart) && cart.length > 0) {
      return (
        <CartList
          data={cart}
          deleteCartProductPress={(cartProduct: ICartProduct) =>
            dispatch(deleteProductFromCartAction(cartProduct) as any)
          }
        />
      );
    }
    return (
      <View style={styles.emptyCartView}>
        <Text>Cart is empty</Text>
      </View>
    );
  };

  const _renderFooter = () => {
    if (cart && Array.isArray(cart) && cart.length > 0) {
      return (
        <View style={styles.footer}>
          <Text style={styles.totalPriceText}>
            Total: {calcuateTotalPrice(cart)}$
          </Text>
          <TouchableOpacity
            style={styles.completeOrderButton}
            onPress={checkCompeteOrder}>
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
