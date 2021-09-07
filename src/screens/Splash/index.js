import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function Splash({navigation}) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.replace('Main');
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shoes Store</Text>
      <Image
        style={styles.image}
        source={require('../../assets/images/logo.png')}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#db2777',
  },
  title: {
    fontSize: 55,
    color: '#fff',
    fontFamily: 'Pacifico-Regular',
  },
  image: {
    width: 55,
    height: 55,
    marginLeft: 10,
    marginTop: 10,
  },
});
