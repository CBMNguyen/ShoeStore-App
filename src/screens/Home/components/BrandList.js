import {Box, Image, ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {BRAND_IMAGES} from '../../../constants/global';

export default function BrandList({category, setCategory}) {
  return (
    <VStack flex={1}>
      <Box>
        <Text fontWeight="bold" color="#000" marginBottom={3}>
          Brand
        </Text>

        <ScrollView
          horizontal={true}
          marginBottom={3}
          showsHorizontalScrollIndicator={false}>
          {BRAND_IMAGES.map(brand => {
            const transformAndColor = {
              borderWidth: brand.name === category ? 3 : 0,
              borderColor: brand.name === category ? 'rose.500' : '',
              transform: brand.name === category ? [{scale: 1.01}] : [],
            };

            return (
              <TouchableOpacity
                key={brand.name}
                style={{
                  transform: transformAndColor.transform,
                  height: 40,
                }}
                onPress={() => setCategory(brand.name)}>
                <Box
                  shadow={5}
                  marginX={2}
                  borderRadius={10}
                  borderWidth={transformAndColor.borderWidth}
                  borderColor={transformAndColor.borderColor}>
                  <Image
                    height={34}
                    width={100}
                    alt={brand.name}
                    borderRadius={10}
                    source={{uri: brand.imageUrl}}
                  />
                </Box>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </Box>
    </VStack>
  );
}
