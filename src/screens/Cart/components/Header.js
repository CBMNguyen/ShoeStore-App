import {HStack, Icon, Image, Text} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header({navigation}) {
  return (
    <HStack bgColor="#fff" height={70} alignItems="center" bgColor="pink.500">
      <Icon
        marginLeft={2}
        onPress={() => navigation.goBack()}
        size="md"
        color="#fff"
        as={<Ionicons name="arrow-back" />}
      />
      <HStack flex={1} marginLeft={4} alignItems="center">
        <Text
          fontSize={30}
          fontWeight="500"
          fontFamily="Pacifico-Regular"
          color="#fff">
          My Cart
        </Text>

        <Image
          source={require('../../../assets/images/logo.png')}
          width={8}
          height={8}
          marginTop={1}
          marginLeft={1}
          resizeMode="stretch"
          alt="logo"
        />
      </HStack>
    </HStack>
  );
}
