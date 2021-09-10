import {Box, Image, ScrollView, View, Text, Icon} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';
import {REACT_APP_API_URL} from '@env';
import {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';

export default function ImageScrollView({product, navigation}) {
  const [dot, setDot] = useState(0);
  const {width} = Dimensions.get('window');

  const scrollChange = nativeEvent => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== dot) setDot(slide);
  };

  return (
    <Box flex={0.65}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={({nativeEvent}) => scrollChange(nativeEvent)}>
        {product.images.map(img => (
          <Box
            key={img}
            width={width}
            alignItems="center"
            position="relative"
            height={width * (768 / 1024) * 1.1}>
            <Image
              source={{uri: `${REACT_APP_API_URL}/${img}`}}
              alt={img}
              width={width}
              height={width * (768 / 1024) * 1.1}
              position="relative"
              top={-100}
              resizeMode="stretch"
            />
          </Box>
        ))}
      </ScrollView>

      <Icon
        onPress={() => navigation.goBack()}
        size="md"
        color="#000"
        as={<Ionicons name="arrow-back" />}
        position="absolute"
        top={2}
        left={2}
      />

      <View
        flexDirection="row"
        alignSelf="center"
        position="absolute"
        bottom={-8}>
        {[1, 2, 3].map((e, i) => (
          <Text key={i} margin="3" color={dot === i ? '#000' : '#888'}>
            ●
          </Text>
        ))}
      </View>
    </Box>
  );
}
