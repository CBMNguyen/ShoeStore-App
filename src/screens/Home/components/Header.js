import {HStack, Icon, Image, Input, Text, VStack} from 'native-base';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FilterModel from './FilterModel';

export default function Header({onFilterChange, filter, color, size}) {
  const [showInput, setShowInput] = useState(false);

  const handleNameChange = name => {
    if (!onFilterChange) return;
    onFilterChange({name});
  };

  return (
    <VStack
      shadow={5}
      paddingX={4}
      marginBottom={1}
      bgColor="pink.500"
      height={showInput ? 130 : 70}>
      <HStack alignItems="center">
        <FilterModel
          sizes={size}
          colors={color}
          filter={filter}
          onFilterChange={onFilterChange}
        />

        <HStack flex={1} marginLeft={4} alignItems="center">
          <Text fontSize={34} fontFamily="Pacifico-Regular" color="#fff">
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
          marginTop={1}
          color="#fff"
          as={<Ionicons name="search" />}
          onPress={() => setShowInput(!showInput)}
        />
      </HStack>

      <Input
        backgroundColor="#fff"
        padding={2}
        fontSize={18}
        placeholder="Search name ..."
        display={showInput ? 'flex' : 'none'}
        onChangeText={value => handleNameChange(value)}
      />
    </VStack>
  );
}
