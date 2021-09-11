import {REACT_APP_JWT_KEY} from '@env';
import {Box, Button, FlatList, useToast} from 'native-base';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SCREEN_NAME} from '../../constants/global';
import showToast from '../../utils/showToast';
import {getOrderWithCart} from '../Order/orderSlice';
import {removeProduct, selectQuantity, selectSize} from './cartSlice';
import Empty from './components/Empty';
import Header from './components/Header';
import ProductItem from './components/ProductItem';

export default function Cart({navigation}) {
  const toast = useToast();
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.cart);
  const {token} = useSelector(state => state.user);

  const handleIncreaseQuantity = product => {
    const action = {
      id: product._id,
      quantity: product.selectedQuantity + 1,
    };
    dispatch(selectQuantity(action));
  };

  const handleDecreaseQuantity = product => {
    const action = {
      id: product._id,
      quantity: product.selectedQuantity - 1,
    };
    dispatch(selectQuantity(action));
  };

  const handleSelectedSize = (product, size) => {
    const action = {
      id: product._id,
      size,
    };
    dispatch(selectSize(action));
  };

  const handleDeleteProduct = product => {
    dispatch(removeProduct({id: product._id}));
    showToast(toast, 'success', 'Delete product successfully');
  };

  const handleGotoCheckout = () => {
    // if (!token) {
    //   navigation.navigate(SCREEN_NAME.Home);
    //   return;
    // }
    const order = cart.map(cart => ({...cart, state: ''}));
    // dispatch(getOrderWithCart({order, userId: user._id}));
    navigation.navigate(SCREEN_NAME.Order);
  };

  return (
    <Box flex={1}>
      <Header navigation={navigation} cart={cart} />

      {cart.length !== 0 ? (
        <Box flex={1}>
          <FlatList
            contentContainerStyle={{margin: 16}}
            data={cart}
            renderItem={({item}) => (
              <ProductItem
                product={item}
                onSelectedSize={handleSelectedSize}
                onDeleteProduct={handleDeleteProduct}
                onIncreaseQuantity={handleIncreaseQuantity}
                onDecreaseQuantity={handleDecreaseQuantity}
              />
            )}
            keyExtractor={item => item._id}
          />
          <Button
            onPress={handleGotoCheckout}
            colorScheme="secondary"
            position="absolute"
            bottom={3}
            right={2}>
            Check out
          </Button>
        </Box>
      ) : (
        <Empty navigation={navigation} />
      )}
    </Box>
  );
}
