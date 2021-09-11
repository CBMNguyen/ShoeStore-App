import {FormControl, Radio, Text} from 'native-base';
import React from 'react';
import {Controller} from 'react-hook-form';
import {capitalizeFirstLetter} from '../utils/showToast';

export default function GenderField({control, name, errors}) {
  return (
    <FormControl isRequired isInvalid={name in errors}>
      <FormControl.Label
        _text={{color: 'muted.700', fontSize: 'md', fontWeight: 600}}>
        {capitalizeFirstLetter(name)}
      </FormControl.Label>
      <Controller
        name={name}
        control={control}
        render={({field}) => (
          <Radio.Group
            name={name}
            flexDirection="row"
            onChange={val => field.onChange(val)}>
            <Radio value="male" colorScheme="primary">
              <Text mx={2}>Male</Text>
            </Radio>
            <Radio value="female" colorScheme="secondary">
              <Text mx={2}>Female</Text>
            </Radio>
          </Radio.Group>
        )}
      />
      <FormControl.ErrorMessage>
        {errors[name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
