import {FormControl, TextArea} from 'native-base';
import React from 'react';
import {Controller} from 'react-hook-form';
import {capitalizeFirstLetter} from '../utils/showToast';

export default function TextAreaField({
  name,
  errors,
  control,
  placeholder,
  keyboardType,
}) {
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
          <TextArea
            {...field}
            placeholder={placeholder}
            keyboardType={keyboardType ? keyboardType : 'default'}
            onChangeText={val => field.onChange(val)}
          />
        )}
      />
      <FormControl.ErrorMessage>
        {errors[name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
