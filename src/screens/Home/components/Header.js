import React from 'react';
import {HStack, Input, Icon, Text, Image, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';

export default function Header() {
  const [showInput, setShowInput] = useState(false);
  return (
    <VStack
      height={showInput ? 130 : 70}
      paddingX={4}
      bgColor="#fff"
      shadow={5}>
      <HStack alignItems="center">
        <Icon
          size="md"
          as={<Ionicons name="filter" />}
          color="gray.800"
          marginTop={1}
        />
        <HStack flex={1} marginLeft={4} alignItems="center">
          <Text fontSize={34} fontFamily="Pacifico-Regular" color="#000">
            Shoes Store
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
        <Icon
          size="md"
          as={<Ionicons name="search" />}
          marginTop={1}
          color="gray.500"
          onPress={() => setShowInput(!showInput)}
        />
      </HStack>
      <Input
        placeholder="Search name ..."
        display={showInput ? 'flex' : 'none'}
        fontSize={18}
        paddingX={4}
      />
    </VStack>
  );
}
