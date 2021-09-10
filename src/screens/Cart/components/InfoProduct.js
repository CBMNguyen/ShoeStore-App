import {REACT_APP_API_URL} from '@env';
import {Center, HStack, Image, Text, VStack} from 'native-base';
import React from 'react';

export default function InfoProduct({product}) {
  return (
    <HStack height={55}>
      <Image
        top={-40}
        width={100}
        height={100}
        alt={product._id}
        resizeMode="cover"
        position="relative"
        source={{uri: `${REACT_APP_API_URL}/${product.images[0]}`}}
      />

      <VStack marginLeft={3}>
        <Text fontWeight="bold" marginBottom={2}>
          {product.name}
        </Text>

        <Center
          backgroundColor={product.selectedColor}
          width={8}
          height={8}
          shadow={9}
          rounded="full"
        />
      </VStack>
    </HStack>
  );
}
