import {Box, FlatList, useToast} from 'native-base';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import showToast from '../../utils/showToast';
import {removeProduct, selectQuantity, selectSize} from './cartSlice';
import Header from './components/Header';
import ProductItem from './components/ProductItem';

export default function Cart({navigation}) {
  const toast = useToast();
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.cart);

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

  return (
    <Box flex={1}>
      <Header navigation={navigation} />

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
    </Box>
  );
}
