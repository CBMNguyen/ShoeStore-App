import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Link,
  Text,
  VStack,
} from 'native-base';
import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SCREEN_NAME} from '../constants/global';

export default function Login({navigation}) {
  return (
    <Box safeArea flex={1} p={2} w="95%" mx="auto" bgColor="#fff">
      <Heading size="xl" color="secondary.500">
        Welcome
      </Heading>

      <Heading color="muted.400" size="sm">
        Sign in to continue!
      </Heading>

      <VStack space={2} mt={5}>
        <FormControl>
          <FormControl.Label
            _text={{color: 'muted.700', fontSize: 'md', fontWeight: 600}}>
            Email ID
          </FormControl.Label>
          <Input />
        </FormControl>

        <FormControl mb={5}>
          <FormControl.Label
            _text={{color: 'muted.700', fontSize: 'md', fontWeight: 600}}>
            Password
          </FormControl.Label>
          <Input type="password" />

          <Link
            _text={{fontSize: 'sm', fontWeight: '700', color: 'secondary.500'}}
            alignSelf="flex-end"
            mt={1}>
            Forget Password?
          </Link>
        </FormControl>

        <VStack space={2}>
          <Button
            colorScheme="secondary"
            _text={{color: 'white', fontSize: 'lg', fontWeight: 'bold'}}>
            Login
          </Button>

          <HStack justifyContent="center" alignItem="center">
            <IconButton
              variant="unstyled"
              startIcon={
                <Icon
                  as={<MaterialCommunityIcons name="facebook" />}
                  color="muted.700"
                  size="md"
                />
              }
            />

            <IconButton
              variant="unstyled"
              startIcon={
                <Icon
                  as={<MaterialCommunityIcons name="google" />}
                  color="muted.700"
                  size="md"
                />
              }
            />

            <IconButton
              variant="unstyled"
              startIcon={
                <Icon
                  as={<MaterialCommunityIcons name="github" />}
                  color="muted.700"
                  size="md"
                />
              }
            />
          </HStack>
        </VStack>

        <HStack justifyContent="center">
          <Text fontSize="md" color="muted.700" fontWeight={400}>
            I'm a new user.{' '}
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate(SCREEN_NAME.SignUp)}>
            <Text color="secondary.500" fontSize="md" fontWeight="bold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </HStack>
      </VStack>
    </Box>
  );
}
