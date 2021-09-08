import {REACT_APP_API_URL} from '@env';
import {Box, Icon, Image, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProductListItem({product}) {
  return (
    <Box
      flex={1}
      bgColor="#fff"
      shadow={2}
      borderRadius="xl"
      margin={2}
      padding={4}>
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
          color="gray.300"
        />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({});
