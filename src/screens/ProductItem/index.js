import {Box, Button, Heading, Icon, Text, VStack} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageScrollView from '../Home/components/ImageScrollView';

export default function ProductItem({route}) {
  const product = route.params;
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  return (
    <Box flex={1} bgColor="#fff">
      <ImageScrollView product={product} />

      <VStack
        flex={1}
        padding={6}
        borderTopLeftRadius={34}
        borderTopRightRadius={34}
        bg={{
          linearGradient: {
            colors: ['pink.400', 'pink.600'],
            start: [0, 0],
            end: [0, 1],
          },
        }}>
        <Heading size="md" color="#000">
          {product.name}
        </Heading>

        <Heading size="md" color="yellow.400">
          {product.originalPrice}$
        </Heading>

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
          }></Button>
      </VStack>
    </Box>
  );
}
