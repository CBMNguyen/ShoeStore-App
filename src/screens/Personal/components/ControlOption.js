import React from 'react';
import {useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {logOut} from '../../../app/userSlice';
import {HStack, Icon, Text, VStack} from 'native-base';
import {TouchableOpacity} from 'react-native';

export default function ControlOption() {
  const dispatch = useDispatch();

  return (
    <VStack space={2}>
      <TouchableOpacity>
        <HStack alignItems="center" space={4}>
          <Icon
            size="md"
            color="pink.500"
            as={<Ionicons name="heart-outline" />}
          />
          <Text>Favourite</Text>
        </HStack>
      </TouchableOpacity>

      <TouchableOpacity>
        <HStack alignItems="center" space={4}>
          <Icon
            size="md"
            color="pink.500"
            as={<Ionicons name="cart-outline" />}
          />
          <Text>Purchase history</Text>
        </HStack>
      </TouchableOpacity>

      <TouchableOpacity>
        <HStack alignItems="center" space={4}>
          <Icon
            size="md"
            color="pink.500"
            as={<Ionicons name="card-outline" />}
          />
          <Text>Payment</Text>
        </HStack>
      </TouchableOpacity>

      <TouchableOpacity>
        <HStack alignItems="center" space={4}>
          <Icon
            size="md"
            color="pink.500"
            as={<Ionicons name="settings-outline" />}
          />
          <Text>Setting</Text>
        </HStack>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dispatch(logOut())}>
        <HStack alignItems="center" space={4}>
          <Icon
            size="md"
            color="pink.500"
            as={<Ionicons name="log-out-outline" />}
          />
          <Text>Logout</Text>
        </HStack>
      </TouchableOpacity>
    </VStack>
  );
}
