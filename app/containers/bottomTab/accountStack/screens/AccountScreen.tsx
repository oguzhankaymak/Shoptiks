import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles/AccountScreen.style';
import {ArrowRightIcon} from '../../../../components/icons';
import Button, {ButtonTypes} from '../../../../components/button/Button';
import {useAppDispatch, useAppSelector} from '../../../../redux/Hooks';
import {CartActionTypes} from '../../../../redux/cart/types/ActionTypes';
import {AuthActionTypes} from '../../../../redux/auth/types/ActionTypes';

const AccountScreen: FC<any> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cartReducer.cartItem);

  const logout = () => {
    if (cart && Array.isArray(cart) && cart.length > 0) {
      dispatch({type: CartActionTypes.CLEAR_CART});
    }
    return dispatch({type: AuthActionTypes.LOGOUT});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Account</Text>
      </View>
      <View style={styles.option}>
        <TouchableOpacity
          style={styles.shadow}
          onPress={() => navigation.navigate('LastOrdersScreen')}>
          <View style={styles.button}>
            <Text>Last Orders</Text>
            <ArrowRightIcon size={24} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.option}>
        <TouchableOpacity
          style={styles.shadow}
          onPress={() => navigation.navigate('ProfileScreen')}>
          <View style={styles.button}>
            <Text>Profile</Text>
            <ArrowRightIcon size={24} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.option}>
        <Button type={ButtonTypes.danger} text={'Logout'} action={logout} />
      </View>
    </View>
  );
};

export default AccountScreen;
