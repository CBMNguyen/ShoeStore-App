import {
  Box,
  Button,
  HStack,
  Icon,
  Radio,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import ProductListItem from './components/ProductListItem';

export default function Order({navigation}) {
  const {order} = useSelector(state => state.order);

  const totalPrice = order.reduce(
    (total, product) =>
      (total += product.originalPrice * product.selectedQuantity),
    0,
  );

  return (
    <Box flex={1} bgColor="#fff">
      <HStack height={70} alignItems="center" bgColor="pink.500">
        <Icon
          size="md"
          color="#fff"
          marginLeft={2}
          onPress={() => navigation.goBack()}
          as={<Ionicons name="arrow-back" />}
        />

        <HStack flex={1} marginLeft={4} alignItems="center">
          <Text
            color="#fff"
            fontSize={30}
            fontWeight="500"
            fontFamily="Pacifico-Regular">
            Order
          </Text>
        </HStack>
      </HStack>

      <ScrollView marginBottom={16} contentContainerStyle={{padding: 16}}>
        {order.map(product => (
          <ProductListItem key={product._id} product={product} />
        ))}

        <HStack justifyContent="space-between" marginTop={8}>
          <VStack width="75%">
            <Text color="#000" fontSize="2xl" marginBottom={1}>
              Shipping 🚍
            </Text>

            <Text color="muted.400" lineHeight={5}>
              For the best customer support Shoe store free shipping for all
              items. Thank you for supporting the shop ❤
            </Text>
          </VStack>
          <Radio.Group
            flex={1}
            top={10}
            right={-10}
            name="freeship"
            defaultValue="2"
            position="relative"
            colorScheme="secondary">
            <Radio value="2" my={2}>
              {' '}
            </Radio>
          </Radio.Group>
        </HStack>

        <VStack marginTop={8}>
          <HStack justifyContent="space-between">
            <Text>Total Quantity: </Text>
            <Text>{`${order.length.toString()}   `}</Text>
          </HStack>

          <HStack justifyContent="space-between">
            <Text>Discount: </Text>
            <Text>{`${(totalPrice - Math.trunc(totalPrice)).toFixed(
              1,
            )} $`}</Text>
          </HStack>

          <HStack justifyContent="space-between">
            <Text fontWeight="bold">Total Price: </Text>
            <Text fontWeight="bold">{`${Math.trunc(
              totalPrice,
            ).toString()} $`}</Text>
          </HStack>
        </VStack>
      </ScrollView>

      <Button
        width="90%"
        bottom={0}
        marginX="5%"
        position="absolute"
        colorScheme="secondary"
        _text={{fontWeight: 'bold'}}>
        Check out
      </Button>
    </Box>
  );
}
