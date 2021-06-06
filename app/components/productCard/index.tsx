import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {IProduct} from '../../containers/bottomTab/homeStack/controllers/data';
import Button, {ButtonTypes} from '../button/Button';
import {ProductInfo} from './ProductInfo';

import styles from './styles/ProductCard.style';

type ProductCardProps = {
  product: IProduct;
  addToCartPress: (product: IProduct) => void;
  detailPress: () => void;
};

const Index: FC<ProductCardProps> = ({
  product,
  addToCartPress,
  detailPress,
}) => {
  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleText}>{product.name}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.detailView}>
          <Text style={styles.detailText}>
            {product.detail.substr(0, 30)}
            {product.detail.length > 30 && '...'}
          </Text>
        </View>
        <ProductInfo label={'Price'} value={product.price} />
        <ProductInfo label={'Category'} value={product.category} />
        <ProductInfo label={'Weight'} value={product.weight} />
        <ProductInfo label={'Stock'} value={product.stock} />
        <View style={styles.footer}>
          <Button
            type={ButtonTypes.secondary}
            text={'Detail'}
            action={detailPress}
          />
          <View style={styles.addToCartButton}>
            <Button
              type={ButtonTypes.primary}
              text={'Add To Cart'}
              action={() => addToCartPress(product)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Index;
