import {Box, HStack, Text} from 'native-base';
import React from 'react';

export default function PurchaseHistory() {
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
          140 $
        </Text>

        <Text color="muted.400">total spending</Text>
      </Box>

      <Box flex={1} justifyContent="center" alignItems="center">
        <Text fontWeight="bold" fontSize="lg">
          12
        </Text>
        <Text color="muted.400">order</Text>
      </Box>
    </HStack>
  );
}
