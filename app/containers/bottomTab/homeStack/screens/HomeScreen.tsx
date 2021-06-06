import React, {FC, useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import styles from './styles/HomeScreen.style';
import {IProduct} from '../controllers/data';
import {getProductsRequest} from '../controllers/HomeController';
import ProductList from '../../../../components/productList/Index';
import Colors from '../../../../theme/Colors';
import {useAppDispatch} from '../../../../redux/Hooks';
import {addToCartAction} from '../../../../redux/cart/actions/Actions';

const HomeScreen: FC<any> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const response = await getProductsRequest();
      if (response?.statusCode === 200 && response?.data) {
        setIsLoading(false);
        return setProducts(response?.data?.products);
      }
      return setIsLoading(false);
    } catch (error) {
      return setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const _renderContent = () => {
    if (isLoading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator size={'small'} color={Colors.black} />
        </View>
      );
    } else if (products && Array.isArray(products) && products.length > 0) {
      return (
        <ProductList
          data={products}
          addToCartPress={(product: IProduct) =>
            dispatch(addToCartAction(product) as any)
          }
          detailPress={() => navigation.navigate('ProductDetailScreen')}
        />
      );
    }
    return (
      <View style={styles.center}>
        <Text>No Content!</Text>
      </View>
    );
  };

  return <View style={styles.container}>{_renderContent()}</View>;
};

export default HomeScreen;
