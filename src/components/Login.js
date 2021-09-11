import {yupResolver} from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
  ScrollView,
  Text,
  useToast,
  VStack,
} from 'native-base';
import * as React from 'react';
import {useForm} from 'react-hook-form';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';
import {userLogin} from '../app/userSlice';
import {SCREEN_NAME} from '../constants/global';
import InputField from '../custom-fields/InputField';
import {showToastError} from '../utils/showToastError';
import {showToastSuccess} from '../utils/showToastSuccess';

export default function Login({navigation}) {
  const toast = useToast();
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.user);

  const defaultValues = {
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('This field is require !')
      .matches(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        'Please enter correct email format!',
      ),
    password: yup.string().required('This field is require.'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({defaultValues, resolver: yupResolver(schema)});

  const onSubmit = async data => {
    try {
      await showToastSuccess(toast, dispatch(userLogin(data)));
    } catch (error) {
      showToastError(toast, error);
    }
  };

  return (
    <ScrollView safeArea flex={1} bgColor="#fff">
      <Box flex={1} p={2} w="95%" mx="auto">
        <Heading size="xl" color="secondary.500">
          Welcome
        </Heading>

        <Heading color="muted.400" size="sm">
          Sign in to continue!
        </Heading>

        <VStack space={2} mt={5}>
          <InputField
            type="text"
            name="email"
            errors={errors}
            control={control}
            placeholder="Your email"
          />

          <InputField
            name="password"
            type="password"
            errors={errors}
            control={control}
            placeholder="Your password"
          />

          <Link
            _text={{fontSize: 'sm', fontWeight: '700', color: 'secondary.500'}}
            alignSelf="flex-end"
            mt={1}>
            Forget Password?
          </Link>

          <VStack space={2}>
            <Button
              isLoading={loading}
              colorScheme="secondary"
              isLoadingText="Submitting"
              onPress={handleSubmit(onSubmit)}
              _text={{color: 'white', fontSize: 'lg', fontWeight: 'bold'}}>
              Login
            </Button>

            <HStack justifyContent="center" alignItem="center">
              <IconButton
                startIcon={
                  <Icon
                    size="md"
                    color="muted.700"
                    as={<MaterialCommunityIcons name="facebook" />}
                  />
                }
              />

              <IconButton
                startIcon={
                  <Icon
                    size="md"
                    color="muted.700"
                    as={<MaterialCommunityIcons name="google" />}
                  />
                }
              />

              <IconButton
                startIcon={
                  <Icon
                    size="md"
                    color="muted.700"
                    as={<MaterialCommunityIcons name="github" />}
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
    </ScrollView>
  );
}
