import {REACT_APP_API_URL} from '@env';
import {Box, Heading, HStack, Icon, Image, Text, VStack} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

export default function Personal() {
  const {user} = useSelector(state => state.user);

  return (
    <VStack flex={1} backgroundColor="#fff" padding={5}>
      <HStack alignItems="center" space={6}>
        <TouchableOpacity>
          <Image
            width={82}
            height={82}
            rounded="full"
            alt={user._id}
            source={{uri: `${REACT_APP_API_URL}/${user.image}`}}
          />

          <Icon
            size="sm"
            left={50}
            bottom={0}
            color="#bbb"
            position="absolute"
            as={<Ionicons name="camera-outline" />}
          />
        </TouchableOpacity>

        <VStack position="relative" top={-16}>
          <Heading
            size="2xl"
            color="muted.700"
            fontFamily="Pacifico-Regular">{`${user.firstname} ${user.lastname}`}</Heading>

          <Heading size="sm" marginLeft={1} color="muted.400">
            user
          </Heading>
        </VStack>

        <Box position="absolute" top={-4} right={4}>
          <TouchableOpacity>
            <Icon
              size="md"
              color="#000"
              marginTop={4}
              marginLeft="auto"
              alignSelf="flex-start"
              as={<MaterialCommunityIcons name="account-edit-outline" />}
            />
          </TouchableOpacity>
        </Box>
      </HStack>
      <VStack marginTop={4} space={5}>
        <HStack alignItems="center" space={4}>
          <Icon
            size="sm"
            color="muted.500"
            as={<Ionicons name="location-outline" />}
          />

          <Text color="muted.400">{user.address}</Text>
        </HStack>

        <HStack alignItems="center" space={4}>
          <Icon
            size="sm"
            color="muted.500"
            as={<Ionicons name="call-outline" />}
          />

          <Text color="muted.400">{user.address}</Text>
        </HStack>

        <HStack alignItems="center" space={4}>
          <Icon
            size="sm"
            color="muted.500"
            as={<Ionicons name="mail-outline" />}
          />

          <Text color="muted.400">{user.email}</Text>
        </HStack>

        <HStack alignItems="center" space={4}>
          <Icon
            size="sm"
            color="muted.500"
            as={<Ionicons name="transgender" />}
          />

          <Text color="muted.400">{user.gender}</Text>
        </HStack>
        <HStack
          height={24}
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

        <VStack space={3}>
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
        </VStack>
      </VStack>
    </VStack>
  );
}
