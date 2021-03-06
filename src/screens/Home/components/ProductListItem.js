import {REACT_APP_API_URL} from '@env';
import {Box, Icon, Image, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {SCREEN_NAME} from '../../../constants/global';

export default function ProductListItem({product, navigation}) {
  const {cart} = useSelector(state => state.cart);

  let cartColor = 'gray.300';
  const index = cart.findIndex(productItem => productItem._id === product._id);

  if (index !== -1) {
    cartColor = 'pink.500';
  }

  return (
    <Box
      flex={1}
      bgColor="#fff"
      shadow={9}
      borderRadius="xl"
      margin={2}
      padding={4}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate(SCREEN_NAME.ProductItem, product)}>
        <Box alignItems="center">
          <Image
            source={{
              uri: `${REACT_APP_API_URL}/${product.images[0]}`,
            }}
            alt="Alternate Text"
            size={'xl'}
            resizeMode="stretch"
          />
        </Box>

        <Text noOfLines={1} color="#000">
          {product.name}
        </Text>
        <Box flexDirection="row" justifyContent="space-between" marginTop={1}>
          <Text color="gray.400">{product.originalPrice.toString() + '$'}</Text>
          <Icon
            size="sm"
            as={<Ionicons name="cart-outline" />}
            color={cartColor}
          />
        </Box>
      </TouchableOpacity>
    </Box>
  );
}
