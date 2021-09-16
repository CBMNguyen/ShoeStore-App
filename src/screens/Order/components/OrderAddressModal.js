import {REACT_APP_LOCATION_KEY} from '@env';
import {yupResolver} from '@hookform/resolvers/yup';
import axios from 'axios';
import {Button, Modal} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import CheckboxField from '../../../custom-fields/CheckboxField';
import InputField from '../../../custom-fields/InputField';
import SelectField from '../../../custom-fields/SelectField';
import TextAreaField from '../../../custom-fields/TextAreaField';
import InfoOrder from './InfoOrder';

export default function OrderAddressModal({
  user,
  loading,
  showModal,
  onCheckout,
  userLoading,
  setShowModal,
  onCheckoutAndUpdateOrderAddress,
}) {
  const [city, setCity] = useState([]);
  const [commune, setCommune] = useState([]);
  const [district, setDistrict] = useState([]);

  const [showEditModel, setShowEditModel] = useState(
    user.orderAddress.phone ? false : true,
  );

  // Set filter when change
  const [filter, setFilter] = useState({
    cityCode: null,
    districtCode: null,
  });

  useEffect(() => {
    const fetchCity = async () => {
      const City = await axios.get(REACT_APP_LOCATION_KEY);
      const data = City.data || [];

      const cityOptions = data.map(ct => ({
        label: ct.name,
        value: ct.code,
      }));

      setCity(cityOptions);
    };
    fetchCity();
  }, []);

  // Fetch district when city change
  useEffect(() => {
    const fetchDistrict = async () => {
      if (filter.cityCode === null) return;

      const District = await axios.get(
        `${REACT_APP_LOCATION_KEY}p/${filter.cityCode}/?depth=2`,
      );

      const data = District.data.districts || [];
      const districtOptions = data.map(ct => ({
        label: ct.name,
        value: ct.code,
      }));

      setDistrict(districtOptions);
    };
    fetchDistrict();
  }, [filter]);

  // Fetch commune when district change
  useEffect(() => {
    const fetchCommune = async () => {
      if (filter.districtCode === null) return;

      const Commune = await axios.get(
        `${REACT_APP_LOCATION_KEY}d/${filter.districtCode}/?depth=2`,
      );

      const data = Commune.data.wards || [];
      const communeOptions = data.map(ct => ({
        label: ct.name,
        value: ct.code,
      }));

      setCommune(communeOptions);
    };
    fetchCommune();
  }, [filter]);

  const defaultValues = {
    city: '',
    phone: '',
    commune: '',
    fullName: '',
    district: '',
    description: '',
    isFullDay: true,
  };

  const schema = yup.object().shape({
    city: yup.string().required('This field is require !'),
    district: yup.string().required('This field is require.'),
    commune: yup.string().required('This field is require.'),
    description: yup.string(),
    fullName: yup.string().required('This field is require.'),
    phone: yup
      .string()
      .required('This field is require.')
      .matches(/^0[0-9]{9}$/, 'Please enter correct phone number!'),
    isFullDay: yup.boolean(),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({defaultValues, resolver: yupResolver(schema)});

  const handleCheckoutClick = () => {
    if (!onCheckout) return;
    onCheckout();
  };

  const handleCheckoutAndUpdateOrderAddress = orderAddress => {
    if (!onCheckoutAndUpdateOrderAddress) return;
    onCheckoutAndUpdateOrderAddress(orderAddress);
  };

  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Delivery Address</Modal.Header>

          {!showEditModel ? (
            <Modal.Body>
              <InfoOrder user={user} />
            </Modal.Body>
          ) : (
            <Modal.Body>
              <InputField
                type="text"
                name="fullName"
                errors={errors}
                control={control}
                placeholder="Your Name"
              />
              <InputField
                name="phone"
                type="text"
                errors={errors}
                control={control}
                placeholder="Your Phone"
              />
              <SelectField
                name="city"
                options={city}
                filter={filter}
                errors={errors}
                control={control}
                setFilter={setFilter}
                placeholder="Your City"
              />
              <SelectField
                name="district"
                filter={filter}
                errors={errors}
                control={control}
                options={district}
                setFilter={setFilter}
                placeholder="Your District"
              />
              <SelectField
                name="commune"
                filter={filter}
                errors={errors}
                options={commune}
                control={control}
                setFilter={setFilter}
                placeholder="Your Commune"
              />
              <TextAreaField
                name="description"
                errors={errors}
                control={control}
                placeholder="Your Description"
              />
              <CheckboxField
                name="isFullDay"
                errors={errors}
                control={control}
              />{' '}
            </Modal.Body>
          )}

          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                colorScheme="pink"
                display={showEditModel ? 'none' : 'flex'}
                _text={{fontWeight: 'bold', color: '#fff'}}
                onPress={() => setShowEditModel(!showEditModel)}>
                Edit
              </Button>

              <Button
                colorScheme="cyan"
                isLoading={loading || userLoading}
                onPress={
                  showEditModel
                    ? handleSubmit(handleCheckoutAndUpdateOrderAddress)
                    : () => handleCheckoutClick()
                }
                _text={{fontWeight: 'bold', color: '#fff'}}>
                Next
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}
