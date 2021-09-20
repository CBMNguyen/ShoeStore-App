import {
  Badge,
  Heading,
  HStack,
  Icon,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import orderApi from '../../api/order';
import Loading from '../../components/Loading';
import {capitalizeFirstLetter} from '../../utils/showToast';

function OrderHistory({navigation}) {
  const [order, setOrder] = useState([]);
  const [increase, setIncrease] = useState(1);
  const {user} = useSelector(state => state.user);

  useEffect(() => {
    const fetchOrder = async () => {
      const Order = await orderApi.get(user._id);
      if (Order.length !== 0) {
        setOrder(Order.order);
      }
    };
    fetchOrder();
  }, [user._id]);

  const sortOrderByDate = order.sort((a, b) => {
    return increase === 1
      ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <VStack flex={1} bgColor="#fff">
      <HStack
        padding={4}
        paddingBottom={0}
        alignItems="center"
        justifyContent="space-between">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Heading size="lg" color="#000">
            Purchase History 💳
          </Heading>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIncrease(increase * -1)}>
          <Icon
            size="md"
            color="#000"
            marginLeft={2}
            as={
              <Ionicons name={increase === 1 ? 'chevron-down' : 'chevron-up'} />
            }
          />
        </TouchableOpacity>
      </HStack>

      {sortOrderByDate.length !== 0 && (
        <ScrollView contentContainerStyle={{padding: 16}} flex={1}>
          {sortOrderByDate.map((od, i) => (
            <VStack
              shadow={9}
              padding={3}
              marginBottom={4}
              key={od.createdAt}
              bgColor={
                i % 3 === 0
                  ? 'teal.400'
                  : i % 3 === 1
                  ? 'pink.500'
                  : 'green.400'
              }
              rounded="lg">
              <HStack
                top={-5}
                position="relative"
                justifyContent="space-between">
                <Text fontSize={20} color="#000" fontFamily="Pacifico-Regular">
                  {new Date(od.createdAt).toDateString()}
                </Text>

                <Badge
                  width={78}
                  marginTop={4}
                  position="relative"
                  top={-6}
                  _text={{fontWeight: 'bold', textAlign: 'center'}}
                  colorScheme={
                    od.state === 'pending'
                      ? 'info'
                      : od.state === 'processing'
                      ? 'danger'
                      : 'success'
                  }>
                  {capitalizeFirstLetter(od.state)}
                </Badge>
              </HStack>
              <VStack>
                {od.products.map(product => (
                  <VStack key={product.name}>
                    <HStack justifyContent="space-between">
                      <Text color="#fff">{product.name}</Text>
                      <Text color="#fff">{product.selectedSize}</Text>
                      <Text color="#fff">{product.selectedColor}</Text>
                      <Text color="#fff">{product.selectedQuantity}</Text>
                    </HStack>
                    <Text color="#fff">{product.originalPrice}$</Text>
                  </VStack>
                ))}
              </VStack>
            </VStack>
          ))}
        </ScrollView>
      )}
      {order.length === 0 && <Loading />}
    </VStack>
  );
}

export default OrderHistory;
