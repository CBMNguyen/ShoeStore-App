import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Icon,
  Input,
  VStack,
} from 'native-base';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Signup({navigation}) {
  return (
    <Box safeArea flex={1} p={2} w="95%" mx="auto" bgColor="#fff">
      <HStack justifyContent="space-between" alignItems="center">
        <Heading size="xl" color="secondary.500">
          Welcome
        </Heading>

        <Icon
          size="md"
          color="#000"
          as={<Ionicons name="arrow-back" />}
          onPress={() => navigation.goBack()}
        />
      </HStack>

      <Heading color="muted.400" size="sm">
        Sign up to continue!
      </Heading>

      <VStack space={1} mt={3}>
        <HStack space={5}>
          <FormControl flex={1} mb={2}>
            <FormControl.Label
              _text={{color: 'muted.700', fontSize: 'md', fontWeight: 600}}>
              First Name
            </FormControl.Label>
            <Input type="text" />
          </FormControl>

          <FormControl flex={1} mb={1}>
            <FormControl.Label
              _text={{color: 'muted.700', fontSize: 'md', fontWeight: 600}}>
              Last Name
            </FormControl.Label>
            <Input type="text" />
          </FormControl>
        </HStack>

        <HStack space={5}>
          <FormControl flex={1} mb={1}>
            <FormControl.Label
              _text={{color: 'muted.700', fontSize: 'md', fontWeight: 600}}>
              Phone
            </FormControl.Label>
            <Input type="number" keyboardType="phone-pad" />
          </FormControl>
          <FormControl flex={1} mb={1}>
            <FormControl.Label
              _text={{color: 'muted.700', fontSize: 'md', fontWeight: 600}}>
              Gender
            </FormControl.Label>
            <Input type="password" />
          </FormControl>
        </HStack>

        <FormControl>
          <FormControl.Label
            _text={{color: 'muted.700', fontSize: 'md', fontWeight: 600}}>
            address
          </FormControl.Label>
          <Input />
        </FormControl>

        <FormControl>
          <FormControl.Label
            _text={{color: 'muted.700', fontSize: 'md', fontWeight: 600}}>
            Email
          </FormControl.Label>
          <Input re />
        </FormControl>

        <FormControl mb={3}>
          <FormControl.Label
            _text={{color: 'muted.700', fontSize: 'md', fontWeight: 600}}>
            Password
          </FormControl.Label>
          <Input type="password" />
        </FormControl>

        <VStack>
          <Button
            colorScheme="secondary"
            _text={{color: 'white', fontSize: 'lg', fontWeight: 'bold'}}>
            SignUp
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}
