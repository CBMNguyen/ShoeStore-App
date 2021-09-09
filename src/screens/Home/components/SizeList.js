import {Box, Text, VStack} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

export default function SizeList({size, sizes, setSize}) {
  return (
    <VStack flex={1}>
      <Box>
        <Text fontWeight="bold" color="#000">
          Size
        </Text>
      </Box>

      <Box flex={1} flexDirection="row" flexWrap="wrap" justifyContent="center">
        {sizes.map(s => {
          const transformAndColor = {
            transform: s.size === size ? [{scale: 1.1}] : [],
            bgColor: s.size === size ? '#000' : '#fff',
            color: s.size === size ? '#fff' : '#000',
          };

          return (
            <TouchableOpacity
              key={s.size}
              onPress={() => setSize(s.size)}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
                height: 40,
                marginHorizontal: 20,
                marginVertical: 10,
                backgroundColor: transformAndColor.bgColor,
                elevation: 5,
                borderRadius: 5,
                transform: transformAndColor.transform,
              }}>
              <Text color={transformAndColor.color}>{s.size}</Text>
            </TouchableOpacity>
          );
        })}
      </Box>
    </VStack>
  );
}
