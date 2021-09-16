import {Heading, HStack, Text, VStack} from 'native-base';
import React from 'react';

export default function InfoOrder({user}) {
  return (
    <VStack space={1}>
      <HStack>
        <Heading size="sm">Receiver: </Heading>
        <Text>{user.orderAddress.fullName}</Text>
      </HStack>
      <HStack>
        <Heading size="sm">Phone: </Heading>
        <Text>{user.orderAddress.phone}</Text>
      </HStack>
      <HStack>
        <Heading size="sm">City: </Heading>
        <Text>{user.orderAddress.city}</Text>
      </HStack>
      <HStack>
        <Heading size="sm">district: </Heading>
        <Text>{user.orderAddress.district}</Text>
      </HStack>
      <HStack>
        <Heading size="sm">Commune: </Heading>
        <Text>{user.orderAddress.commune}</Text>
      </HStack>
      <HStack>
        <Heading size="sm">Description: </Heading>
        <Text>{user.orderAddress.description}</Text>
      </HStack>
      <HStack>
        <Heading size="sm">Transport:</Heading>
        <Text>
          {user.orderAddress.isFullDay
            ? 'Delivery available any day of the week'
            : 'Delivery only on business days'}
        </Text>
      </HStack>
    </VStack>
  );
}
