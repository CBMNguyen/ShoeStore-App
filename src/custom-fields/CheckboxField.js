import {Checkbox, FormControl, Text} from 'native-base';
import React from 'react';
import {Controller} from 'react-hook-form';

export default function CheckboxField({name, errors, control}) {
  return (
    <FormControl isRequired isInvalid={name in errors}>
      <Controller
        control={control}
        name={name}
        render={({field}) => (
          <Checkbox
            {...control}
            marginY={2}
            colorScheme="pink"
            flexDirection="row"
            defaultIsChecked={field.value}
            onChange={values => {
              field.onChange(values);
            }}>
            <Text mx={2} fontWeight="500">
              Delivery full day
            </Text>
          </Checkbox>
        )}
      />
      <FormControl.ErrorMessage>
        {errors[name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
