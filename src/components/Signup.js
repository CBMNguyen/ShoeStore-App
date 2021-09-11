import {yupResolver} from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  ScrollView,
  useToast,
  VStack,
} from 'native-base';
import * as React from 'react';
import {useForm} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';
import {createUser} from '../app/userSlice';
import {SCREEN_NAME} from '../constants/global';
import GenderField from '../custom-fields/GenderField';
import InputField from '../custom-fields/InputField';
import {showToastError} from '../utils/showToastError';
import {showToastSuccess} from '../utils/showToastSuccess';

export default function Signup({navigation}) {
  const toast = useToast();
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.user);

  const defaultValues = {
    email: '',
    phone: '',
    gender: '',
    address: '',
    lastname: '',
    password: '',
    firstname: '',
  };
  const schema = yup.object().shape({
    firstname: yup.string().required('This field is require.'),
    lastname: yup.string().required('This field is require.'),
    email: yup
      .string()
      .matches(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        'Please enter correct email!',
      )
      .required('This field is require.'),
    password: yup
      .string()
      .required('This field is require.')
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}?/,
        'Password must be at least 8 characters with one uppercase letter, one lowercase letter, and one special character',
      ),
    phone: yup
      .string()
      .required('this field is require.')
      .matches(/^0[0-9]{9}$/, 'Please enter correct phone number!'),
    gender: yup.string().required('This field is require.'),
    address: yup.string().required('This field is require.'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({defaultValues, resolver: yupResolver(schema)});

  const onSubmit = async data => {
    try {
      await showToastSuccess(toast, dispatch(createUser(data)));
      navigation.replace(SCREEN_NAME.Login);
    } catch (error) {
      showToastError(toast, error);
    }
  };

  return (
    <ScrollView safeArea flex={1} bgColor="#fff">
      <Box flex={1} p={2} w="95%" mx="auto">
        <HStack justifyContent="space-between" alignItems="center">
          <Heading size="xl" color="secondary.500">
            Hi! New User
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
            <Box flex={1}>
              <InputField
                name="firstname"
                control={control}
                errors={errors}
                placeholder="First name"
              />
            </Box>

            <Box flex={1}>
              <InputField
                name="lastname"
                control={control}
                errors={errors}
                placeholder="Last name"
              />
            </Box>
          </HStack>

          <HStack space={5}>
            <Box flex={1}>
              <InputField
                name="phone"
                errors={errors}
                control={control}
                placeholder="Your phone"
                keyboardType="phone-pad"
              />
            </Box>
            <Box flex={1}>
              <GenderField name="gender" control={control} errors={errors} />
            </Box>
          </HStack>

          <InputField
            name="address"
            control={control}
            errors={errors}
            placeholder="Your address"
          />

          <InputField
            name="email"
            control={control}
            errors={errors}
            placeholder="Your email"
          />

          <InputField
            name="password"
            type="password"
            control={control}
            errors={errors}
            placeholder="Your password"
          />

          <VStack>
            <Button
              isLoading={loading}
              isLoadingText="Submitting"
              colorScheme="secondary"
              onPress={handleSubmit(onSubmit)}
              marginTop={3}
              _text={{color: 'white', fontSize: 'lg', fontWeight: 'bold'}}>
              SignUp
            </Button>
          </VStack>
        </VStack>
      </Box>
    </ScrollView>
  );
}
