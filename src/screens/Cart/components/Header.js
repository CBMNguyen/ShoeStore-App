import {HStack, Icon, Image, Text} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header({navigation, cart}) {
  const totalPrice = cart.reduce(
    (total, product) =>
      (total += product.originalPrice * product.selectedQuantity),
    0,
  );

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
        {cart.length !== 0 && (
          <Text
            marginTop={4}
            fontSize="xl"
            marginRight={4}
            marginLeft="auto"
            fontWeight="bold"
            color="yellow.300">
            {Math.floor(totalPrice).toString() + '$'}
          </Text>
        )}
      </HStack>
    </HStack>
  );
}
