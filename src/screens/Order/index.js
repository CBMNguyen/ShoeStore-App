import {
  Box,
  Button,
  HStack,
  Radio,
  ScrollView,
  Text,
  useToast,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMe, updateUser} from '../../app/userSlice';
import Empty from '../../components/Empty';
import {showToastError} from '../../utils/showToastError';
import {showToastSuccess} from '../../utils/showToastSuccess';
import {resetCart} from '../Cart/cartSlice';
import {updateProduct} from '../Home/productSlice';
import Header from './components/Header';
import OrderAddressModal from './components/OrderAddressModal';
import Payment from './components/Payment';
import ProductListItem from './components/ProductListItem';
import {createOrder, deleteOrder, getOrderById} from './orderSlice';

export default function Order({navigation}) {
  const toast = useToast();
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);
  const [showModal, setShowModal] = useState(false);
  const userState = useSelector(state => state.user);
  const {order, state, id, loading} = useSelector(state => state.order);

  useEffect(() => {
    if (state) {
      dispatch(getMe(user._id));
      dispatch(getOrderById(user._id));
    }
  }, []);

  const handleCheckoutAndUpdateOrderAddress = async orderAddress => {
    try {
      dispatch(
        updateUser({
          _id: user._id,
          user: {orderAddress: orderAddress},
        }),
      ),
        await handleCheckoutClick();
    } catch (error) {
      showToastError(toast, error);
    }
  };

  const handleCheckoutClick = async () => {
    const data = {
      user: user._id,
      products: order,
    };
    try {
      await showToastSuccess(toast, dispatch(createOrder(data)));

      const updateProductQuantity = async () => {
        order.forEach(async product => {
          await dispatch(
            updateProduct({
              _id: product._id,
              quantityStock: product.quantityStock - product.selectedQuantity,
            }),
          );
        });
      };

      await updateProductQuantity();
      setShowModal(!showModal);
      dispatch(resetCart());
    } catch (error) {
      showToastError(toast, error);
    }
  };

  const handleRemoveClick = async () => {
    try {
      await showToastSuccess(toast, dispatch(deleteOrder(id)));

      const updateProductQuantity = async () => {
        order.forEach(async product => {
          await dispatch(
            updateProduct({
              _id: product._id,
              quantityStock: product.quantityStock,
            }),
          );
        });
      };

      await updateProductQuantity();
    } catch (error) {
      showToastError(toast, error);
    }
  };

  const totalPrice = order.reduce(
    (total, product) =>
      (total += product.originalPrice * product.selectedQuantity),
    0,
  );

  return (
    <Box flex={1} bgColor="#fff">
      <Header navigation={navigation} />

      {order.length !== 0 ? (
        <Box flex={1}>
          <ScrollView marginBottom={16} contentContainerStyle={{padding: 16}}>
            {order.map(product => (
              <ProductListItem key={product._id} product={product} />
            ))}

            <HStack justifyContent="space-between" marginTop={8}>
              <VStack width="75%">
                <Text color="#000" fontSize="2xl" marginBottom={1}>
                  Shipping 🚍
                </Text>

                <Text color="muted.500" lineHeight={5}>
                  For the best customer support Shoes Store free shipping for
                  all items. Thank you for supporting the shop ❤
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

            <Payment order={order} totalPrice={totalPrice} />
          </ScrollView>

          <Button
            bottom={0}
            width="90%"
            marginX="5%"
            position="absolute"
            isLoading={loading}
            _text={{fontWeight: 'bold'}}
            colorScheme={
              state === 'pending'
                ? 'cyan'
                : state === 'processing'
                ? 'blue'
                : state === 'deliveried'
                ? 'green'
                : 'secondary'
            }
            onPress={() => {
              !state
                ? setShowModal(!showModal)
                : state === 'pending'
                ? handleRemoveClick()
                : {};
            }}>
            {!state
              ? 'Check out'
              : state === 'pending'
              ? 'Pending ...'
              : state === 'processing'
              ? 'Processing'
              : 'Deliveried'}
          </Button>

          <OrderAddressModal
            user={user}
            order={order}
            loading={loading}
            showModal={showModal}
            setShowModal={setShowModal}
            userLoading={userState.loading}
            onCheckout={handleCheckoutClick}
            onCheckoutAndUpdateOrderAddress={
              handleCheckoutAndUpdateOrderAddress
            }
          />
        </Box>
      ) : (
        <Empty navigation={navigation} />
      )}
    </Box>
  );
}
