import {HStack, Icon, Text} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header({navigation}) {
  return (
    <HStack height={70} alignItems="center" bgColor="pink.500">
      <Icon
        size="md"
        color="#fff"
        marginLeft={2}
        onPress={() => navigation.goBack()}
        as={<Ionicons name="arrow-back" />}
      />

      <HStack flex={1} marginLeft={4} alignItems="center">
        <Text
          color="#fff"
          fontSize={30}
          fontWeight="500"
          fontFamily="Pacifico-Regular">
          Order
        </Text>
      </HStack>
    </HStack>
  );
}
