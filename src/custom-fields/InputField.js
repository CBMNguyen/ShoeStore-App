import {FormControl, Input} from 'native-base';
import React from 'react';
import {Controller} from 'react-hook-form';
import {capitalizeFirstLetter} from '../utils/showToast';

export default function InputField({
  name,
  type,
  errors,
  control,
  readOnly,
  placeholder,
  keyboardType,
}) {
  return (
    <FormControl marginBottom={2} isRequired isInvalid={name in errors}>
      <FormControl.Label
        _text={{color: 'muted.700', fontSize: 'md', fontWeight: 600}}>
        {capitalizeFirstLetter(name)}
      </FormControl.Label>
      <Controller
        name={name}
        control={control}
        render={({field}) => (
          <Input
            {...field}
            type={type}
            bgColor={readOnly ? '#00f1' : ''}
            isReadOnly={readOnly ? readOnly : false}
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
