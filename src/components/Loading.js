import React from 'react';
import {Box} from 'native-base';
import {ActivityIndicator} from 'react-native';

export default function Loading() {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <ActivityIndicator size="large" color="#ec4899" />
    </Box>
  );
}
