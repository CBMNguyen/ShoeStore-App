import {Box, Text, VStack} from 'native-base';
import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

export default function Empty() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Box flex={1} bgColor="#fff" justifyContent="center" alignItems="center">
        <VStack
          alignItems="center"
          justifyContent="center"
          borderColor="pink.500">
          <Text fontSize={45} fontFamily="Pacifico-Regular">
            Empty
          </Text>
        </VStack>
      </Box>
    </TouchableWithoutFeedback>
  );
}
