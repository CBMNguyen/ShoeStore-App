import {REACT_APP_API_URL} from '@env';
import {Center, HStack, Image, Text, VStack, Divider} from 'native-base';
import React from 'react';

export default function ProductListItem({product}) {
  return (
    <VStack
      flex={1}
      overflow="hidden"
      padding={2}
      bgColor="#fff"
      rounded="lg"
      marginBottom={1}>
      <HStack height={60} position="relative" left={-16}>
        <Image
          top={-40}
          width={100}
          height={100}
          alt={product._id}
          resizeMode="cover"
          position="relative"
          source={{uri: `${REACT_APP_API_URL}/${product.images[0]}`}}
        />

        <VStack flex={1} marginLeft={3}>
          <Text fontWeight="bold" marginBottom={2}>
            {product.name}
          </Text>

          <HStack flex={1} alignItems="center" justifyContent="space-between">
            <Center
              backgroundColor={product.selectedColor}
              width={8}
              height={8}
              shadow={9}
              rounded="full"
            />
            <Text>{`Sz: ${product.selectedSize}`}</Text>
            <Text>{`Q: ${product.selectedQuantity}`}</Text>
            <Text>{`P: ${product.originalPrice} $`}</Text>
          </HStack>
        </VStack>
      </HStack>
      <Divider marginTop={5} />
    </VStack>
  );
}
