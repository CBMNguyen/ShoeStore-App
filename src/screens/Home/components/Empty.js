import {Box, Text, VStack} from 'native-base';
import React from 'react';

export default function Empty() {
  return (
    <Box flex={1} bgColor="#fff" justifyContent="center" alignItems="center">
      <VStack
        shadow={9}
        width={280}
        height={280}
        bgColor="#fff"
        rounded="full"
        borderWidth={1}
        alignItems="center"
        justifyContent="center"
        borderColor="pink.500">
        <Text fontSize={45} fontFamily="Pacifico-Regular">
          Empty
        </Text>
      </VStack>
    </Box>
  );
}
