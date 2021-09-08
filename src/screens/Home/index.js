import React from 'react';
import {Box, FlatList} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProduct} from './productSlice';
import {fetchColor} from './colorSlice';
import {fetchCategory} from './categorySlice';
import {fetchSize} from './sizeSlice';
import {useEffect} from 'react';
import ProductListItem from './components/ProductListItem';
import Header from './components/Header';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchColor());
    dispatch(fetchCategory());
    dispatch(fetchSize());
  }, [dispatch]);

  // const {color} = useSelector(state => state.color);
  // const {category} = useSelector(state => state.category);
  // const {size} = useSelector(state => state.size);
  const {products} = useSelector(state => state.products);

  return (
    <Box flex={1}>
      <Header />
      <FlatList
        contentContainerStyle={{margin: 8}}
        flex={1}
        data={products}
        numColumns={2}
        keyExtractor={item => item._id}
        renderItem={({item}) => <ProductListItem product={item} />}
      />
    </Box>
  );
}
