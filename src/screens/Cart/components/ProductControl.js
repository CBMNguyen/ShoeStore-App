import {CheckIcon, HStack, Icon, Select, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProductControl({
  product,
  onSelectedSize,
  onDeleteProduct,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) {
  const handleIncreaseQuantity = product => {
    if (!onIncreaseQuantity) return;
    onIncreaseQuantity(product);
  };

  const handleDecreaseQuantity = product => {
    if (!onDecreaseQuantity) return;
    onDecreaseQuantity(product);
  };

  const handleSelectedSize = (product, size) => {
    if (!onSelectedSize) return;
    onSelectedSize(product, size);
  };

  const handleDeleteProduct = product => {
    if (!onDeleteProduct) return;
    onDeleteProduct(product);
  };

  return (
    <HStack alignItems="center" justifyContent="space-between" marginTop={4}>
      <HStack marginTop={1} marginLeft={1}>
        <TouchableOpacity onPress={() => handleDecreaseQuantity(product)}>
          <Icon
            size="md"
            disabled={product.selectedQuantity <= 1 ? true : false}
            color={product.selectedQuantity <= 1 ? '#0009' : '#000'}
            as={<Ionicons name="remove-circle" />}
          />
        </TouchableOpacity>

        <Text marginX={2} fontSize={18}>
          {product.selectedQuantity}
        </Text>

        <TouchableOpacity onPress={() => handleIncreaseQuantity(product)}>
          <Icon size="md" color="#000" as={<Ionicons name="add-circle" />} />
        </TouchableOpacity>
      </HStack>

      <Select
        width={82}
        paddingY={0}
        marginTop={2}
        selectedValue={product.selectedSize}
        onValueChange={size => handleSelectedSize(product, size)}
        _selectedItem={{
          bg: 'cyan.600',
          endIcon: <CheckIcon size={4} />,
        }}>
        {product.size.map(s => (
          <Select.Item key={s.size} label={s.size.toString()} value={s.size} />
        ))}
      </Select>

      <Text marginTop={2} color="orange.400" fontWeight="bold" fontSize={18}>
        {(product.originalPrice * product.selectedQuantity)
          .toFixed(2)
          .toString() + '$'}
      </Text>

      <TouchableOpacity onPress={() => handleDeleteProduct(product)}>
        <Icon
          size="md"
          color="#000"
          as={<Ionicons name="trash-outline" marginTop={2} />}
        />
      </TouchableOpacity>
    </HStack>
  );
}
