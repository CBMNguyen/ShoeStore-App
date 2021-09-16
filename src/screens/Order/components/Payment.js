import {HStack, Text, VStack} from 'native-base';
import React from 'react';

export default function Payment({order, totalPrice}) {
  return (
    <VStack marginTop={8}>
      <HStack justifyContent="space-between">
        <Text>Total Quantity: </Text>
        <Text>{`${order.length.toString()}   `}</Text>
      </HStack>

      <HStack justifyContent="space-between">
        <Text>Discount: </Text>
        <Text>{`${(totalPrice - Math.trunc(totalPrice)).toFixed(1)} $`}</Text>
      </HStack>

      <HStack justifyContent="space-between">
        <Text fontWeight="bold">Total Price: </Text>
        <Text fontWeight="bold">{`${Math.trunc(
          totalPrice,
        ).toString()} $`}</Text>
      </HStack>
    </VStack>
  );
}
