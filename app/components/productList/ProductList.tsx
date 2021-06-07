import React, {FC} from 'react';
import {FlatList, View} from 'react-native';

import styles from './styles/ProductList.style';
import {ProductListItem} from './ProductListItem';
import {IProduct} from '../../containers/bottomTab/homeStack/controllers/data';

type ProductListProps = {
  data: IProduct[];
  addToCartPress: (product: IProduct) => void;
  detailPress: () => void;
};

const ProductList: FC<ProductListProps> = ({
  data,
  addToCartPress,
  detailPress,
}) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ProductListItem
            item={item}
            addToCartPress={(product: IProduct) => addToCartPress(product)}
            detailPress={detailPress}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ProductList;
