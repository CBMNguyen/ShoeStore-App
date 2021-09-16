import {CheckIcon, FormControl, Select} from 'native-base';
import React from 'react';
import {Controller} from 'react-hook-form';
import {capitalizeFirstLetter} from '../utils/showToast';

export default function SelectField({
  name,
  errors,
  filter,
  control,
  options,
  setFilter,
  placeholder,
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
          <Select
            placeholder={placeholder}
            selectedValue={field.value}
            marginBottom={2}
            onValueChange={itemValue => {
              field.onChange(itemValue);
              // chỗ này lãng phí 1 vòng lặp để tìm index của label
              const index = options.findIndex(opt => opt.label === itemValue);
              setFilter(
                name === 'commune'
                  ? {...filter}
                  : name === 'city'
                  ? {...filter, cityCode: options[index]['value']}
                  : {...filter, districtCode: options[index]['value']},
              );
            }}
            _selectedItem={{
              bg: 'cyan.200',
              endIcon: <CheckIcon size={4} />,
            }}>
            {options.map(item => (
              <Select.Item
                key={item.label}
                label={item.label}
                value={item.label}
              />
            ))}
          </Select>
        )}
      />
      <FormControl.ErrorMessage>
        {errors[name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
