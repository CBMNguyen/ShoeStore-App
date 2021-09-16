import {REACT_APP_API_URL} from '@env';
import {Box, Heading, HStack, Icon, Image, Text, VStack} from 'native-base';
import {default as React} from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function UserInfo({user}) {
  return (
    <VStack space={4}>
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

        <VStack position="relative" top={-10}>
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
              marginTop={5}
              marginLeft="auto"
              alignSelf="flex-start"
              as={<MaterialCommunityIcons name="account-edit-outline" />}
            />
          </TouchableOpacity>
        </Box>
      </HStack>

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

        <Text color="muted.400">{user.phone}</Text>
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
    </VStack>
  );
}
