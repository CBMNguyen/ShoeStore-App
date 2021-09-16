import {Box, Button, Icon, VStack} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Empty({navigation}) {
  return (
    <Box flex={1} bgColor="#fff" justifyContent="center" alignItems="center">
      <VStack
        width={280}
        height={280}
        bgColor="#fff"
        alignItems="center"
        justifyContent="center"
        borderColor="pink.500">
        <Icon
          size={32}
          color="pink.500"
          as={<Ionicons name="cart-outline" />}
        />

        <Button
          variant="outline"
          colorScheme="secondary"
          onPress={() => navigation.goBack()}
          _text={{fontSize: 20, fontWeight: 'bold'}}>
          Go Back Shop
        </Button>
      </VStack>
    </Box>
  );
}
