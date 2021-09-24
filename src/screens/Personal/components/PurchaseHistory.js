import {Box, HStack, Text} from 'native-base';
import React from 'react';

export default function PurchaseHistory({order}) {
  const totalPriceOrder = () => {
    const ordered = order.filter(od => od.state === 'deliveried');
    const total = ordered.reduce(
      (sum, item) =>
        (sum += item.products.reduce(
          (sum, product) =>
            (sum += product.originalPrice * product.selectedQuantity),
          0,
        )),
      0,
    );
    return total.toFixed(2);
  };

  return (
    <HStack
      height={24}
      marginY={5}
      borderWidth={1}
      borderLeftWidth={0}
      borderRightWidth={0}
      borderColor="muted.200">
      <Box
        flex={1}
        alignItems="center"
        borderRightWidth={1}
        justifyContent="center"
        borderColor="muted.200">
        <Text fontWeight="bold" fontSize="lg">
          {totalPriceOrder()}$
        </Text>

        <Text color="muted.400">total spending</Text>
      </Box>

      <Box flex={1} justifyContent="center" alignItems="center">
        <Text fontWeight="bold" fontSize="lg">
          {order.length}
        </Text>
        <Text color="muted.400">order</Text>
      </Box>
    </HStack>
  );
}
