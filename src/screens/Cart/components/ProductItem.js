import {VStack} from 'native-base';
import React from 'react';
import InfoProduct from './InfoProduct';
import ProductControl from './ProductControl';

export default function ProductItem({
  product,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onSelectedSize,
  onDeleteProduct,
}) {
  return (
    <VStack
      flex={1}
      shadow={9}
      overflow="hidden"
      padding={3}
      bgColor="#fff"
      rounded="lg"
      marginBottom="4">
      <InfoProduct product={product} />

      <ProductControl
        product={product}
        onSelectedSize={onSelectedSize}
        onDeleteProduct={onDeleteProduct}
        onIncreaseQuantity={onIncreaseQuantity}
        onDecreaseQuantity={onDecreaseQuantity}
      />
    </VStack>
  );
}
