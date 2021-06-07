import React, {FC} from 'react';
import {FlatList, View} from 'react-native';

import styles from './styles/CartList.style';
import {CartListItem} from './CartListItem';
import {ICartProduct} from '../../redux/cart/initialState/InitialState';

type CartListProps = {
  data: ICartProduct[];
  deleteCartProductPress: (cartProduct: ICartProduct) => void;
};

const CartList: FC<CartListProps> = ({data, deleteCartProductPress}) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <CartListItem
            item={item}
            deleteCartProductPress={(cartProduct: ICartProduct) =>
              deleteCartProductPress(cartProduct)
            }
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CartList;
