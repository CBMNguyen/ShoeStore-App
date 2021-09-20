import {
  Badge,
  Box,
  Button,
  Heading,
  Icon,
  Text,
  useToast,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import showToast from '../../utils/showToast';
import {addToCart} from '../Cart/cartSlice';
import ImageScrollView from './components/ImageScrollView';

export default function ProductItem({route, navigation}) {
  const dispatch = useDispatch();
  const toast = useToast();
  const product = route.params;
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const {cart} = useSelector(state => state.cart);

  const handleAddtoCart = async product => {
    const index = cart.findIndex(
      productItem => productItem._id === product._id,
    );
    if (index !== -1) {
      showToast(toast, 'info', 'Product already exists in cart');
      return;
    } else {
      let description = '';

      if (!color) description = 'Please check color ! ';
      else if (!size) description = 'Please check size !';
      else description = 'Product added to cart successfully';

      if (!color || !size) {
        showToast(toast, 'info', description);
        return;
      }

      const newProduct = {
        ...product,
        selectedSize: size,
        selectedColor: color,
        selectedQuantity: 1,
      };

      dispatch(addToCart(newProduct));
      showToast(toast, 'success', description);
    }
  };
  return (
    <Box flex={1} bgColor="#fff">
      <ImageScrollView navigation={navigation} product={product} />

      <VStack
        flex={1}
        padding={6}
        borderTopLeftRadius={34}
        borderTopRightRadius={34}
        bg={{
          linearGradient: {
            colors: ['teal.500', 'pink.200'],
            start: [0, 1],
            end: [1, 0],
          },
        }}>
        <Heading size="md" color="#000">
          {product.name}
        </Heading>

        <Badge rounded="lg" bgColor="yellow.400" width={78}>
          <Text fontWeight="bold" color="#000">
            {product.originalPrice}$
          </Text>
        </Badge>

        <Text marginTop={2} color="#fff" noOfLines={6}>
          {product.description}
        </Text>

        <VStack flex={1}>
          <Box>
            <Text fontWeight="bold" color="#000">
              Color
            </Text>
          </Box>

          <Box flex={1} flexDirection="row" flexWrap="wrap">
            {product.color.map(c => {
              const checkColor = c.color === 'white' ? '#000' : '#fff';
              return (
                <TouchableOpacity
                  key={c.color}
                  onPress={() => setColor(c.color)}
                  style={{
                    width: 40,
                    height: 40,
                    marginTop: 10,
                    marginRight: 20,
                    elevation: 9,
                    borderRadius: 20,
                    backgroundColor: c.color,
                  }}>
                  {color === c.color && (
                    <Icon
                      size="lg"
                      color={checkColor}
                      as={<Ionicons name="checkmark-sharp" />}
                    />
                  )}
                </TouchableOpacity>
              );
            })}
          </Box>
        </VStack>

        <VStack flex={1}>
          <Box>
            <Text fontWeight="bold" color="#000">
              Size
            </Text>
          </Box>

          <Box flex={1} flexDirection="row" flexWrap="wrap">
            {product.size.map(s => {
              const transformAndColor = {
                color: s.size === size ? '#fff' : '#000',
                bgColor: s.size === size ? '#000' : '#fff',
                transform: s.size === size ? [{scale: 1.1}] : [],
              };

              return (
                <TouchableOpacity
                  key={s.size}
                  onPress={() => setSize(s.size)}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    marginRight: 20,
                    marginVertical: 10,
                    borderRadius: 5,
                    elevation: 5,
                    backgroundColor: transformAndColor.bgColor,
                    transform: transformAndColor.transform,
                  }}>
                  <Text color={transformAndColor.color}>{s.size}</Text>
                </TouchableOpacity>
              );
            })}
          </Box>
        </VStack>

        <Button
          position="absolute"
          right={6}
          bottom={10}
          size="lg"
          variant="link"
          borderRadius={10}
          endIcon={
            <Icon
              as={MaterialCommunityIcons}
              shadow={9}
              color="yellow.300"
              name="medical-bag"
              size={24}
            />
          }
          onPress={() => handleAddtoCart(product)}
        />
      </VStack>
    </Box>
  );
}
