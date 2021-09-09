import {Box, Icon, Text, VStack} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ColorList({color, colors, setColor}) {
  return (
    <VStack flex={1}>
      <Box>
        <Text fontWeight="bold" color="#000">
          Color
        </Text>
      </Box>

      <Box flex={1} flexDirection="row" flexWrap="wrap" justifyContent="center">
        {colors.map(c => {
          const checkColor = c.color === 'white' ? '#000' : '#fff';
          return (
            <TouchableOpacity
              key={c.color}
              onPress={() => setColor(c.color)}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
                height: 40,
                marginHorizontal: 20,
                marginVertical: 10,
                backgroundColor: c.color,
                elevation: 9,
                borderRadius: 20,
              }}>
              {color === c.color && (
                <Icon
                  size="lg"
                  marginTop={1}
                  color={checkColor}
                  as={<Ionicons name="checkmark-sharp" />}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </Box>
    </VStack>
  );
}
