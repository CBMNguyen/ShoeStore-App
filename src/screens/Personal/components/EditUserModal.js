import {REACT_APP_API_URL} from '@env';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  Image,
  Modal,
  VStack,
} from 'native-base';
import {default as React, useState} from 'react';
import {useForm} from 'react-hook-form';
import {TouchableOpacity} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup';
import GenderField from '../../../custom-fields/GenderField';
import InputField from '../../../custom-fields/InputField';

export default function EditUserModal({
  user,
  loading,
  showModal,
  setShowModal,
  onUpdateProfile,
}) {
  const [readOnly, setReadOnly] = useState(true);
  const [singleImage, setSingleImage] = useState(user.image);

  const defaultValues = {
    password: '',
    email: user.email,
    phone: user.phone,
    gender: user.gender,
    address: user.address,
    lastname: user.lastname,
    firstname: user.firstname,
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
      .matches(
        !readOnly ? /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}?/ : '',
        'Password must be at least 8 characters with one uppercase letter, one lowercase letter, and one special character',
      ),
    phone: yup
      .string()
      .required('This field is require.')
      .matches(/^0[0-9]{9}$/, 'Please enter correct phone number!'),
    gender: yup.string().required('This field is require.'),
    address: yup.string().required('This field is require.'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({defaultValues, resolver: yupResolver(schema)});

  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pickSingle({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.images],
      });
      // Setting the state to show single file attributes
      setSingleImage(res);
    } catch (err) {
      setSingleImage(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const handleUpdateProfile = data => {
    if (!onUpdateProfile) return;
    onUpdateProfile(data, singleImage);
  };

  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content borderRadius={16} width="380px">
          <Modal.CloseButton />
          <Modal.Header margin="auto">
            <TouchableOpacity onPress={() => selectFile()}>
              <Image
                width={110}
                height={110}
                rounded="full"
                alt={user._id}
                source={{uri: `${REACT_APP_API_URL}/${user.image}`}}
              />
              <Center
                left={20}
                bottom={1}
                padding={1}
                rounded="full"
                bgColor="#0005"
                position="absolute">
                <Icon
                  size="sm"
                  color="#fff"
                  as={<Ionicons name="camera-outline" />}
                />
              </Center>
            </TouchableOpacity>
          </Modal.Header>
          <Modal.Body>
            <VStack>
              <HStack space={5}>
                <Box flex={1}>
                  <InputField
                    errors={errors}
                    name="firstname"
                    control={control}
                    placeholder="First name"
                  />
                </Box>

                <Box flex={1}>
                  <InputField
                    name="lastname"
                    errors={errors}
                    control={control}
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
                  <GenderField
                    name="gender"
                    errors={errors}
                    control={control}
                  />
                </Box>
              </HStack>

              <InputField
                name="address"
                errors={errors}
                control={control}
                placeholder="Your address"
              />

              <InputField
                name="email"
                errors={errors}
                control={control}
                placeholder="Your email"
              />

              <TouchableOpacity onPress={() => setReadOnly(!readOnly)}>
                <InputField
                  name="password"
                  type="password"
                  errors={errors}
                  control={control}
                  readOnly={readOnly}
                  placeholder="Your password"
                />
              </TouchableOpacity>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onPress={handleSubmit(handleUpdateProfile)}
              width="90%"
              margin="auto"
              isLoading={loading}
              colorScheme="secondary"
              isLoadingText="Updating ..."
              _text={{fontWeight: 'bold'}}>
              Update
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}
