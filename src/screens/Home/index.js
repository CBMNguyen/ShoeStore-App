import {Box, FlatList} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../../components/Loading';
import {fetchCategory} from './categorySlice';
import {fetchColor} from './colorSlice';
import Empty from './components/Empty';
import Header from './components/Header';
import ProductListItem from './components/ProductListItem';
import {fetchProduct} from './productSlice';
import {fetchSize} from './sizeSlice';

export default function Home({navigation}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchColor());
    dispatch(fetchCategory());
    dispatch(fetchSize());
  }, [dispatch]);

  const [filter, setfilter] = useState({
    name: '',
    color: '',
    size: '',
    category: '',
  });

  const {color} = useSelector(state => state.color);
  const {size} = useSelector(state => state.size);
  const {products} = useSelector(state => state.products);

  const filterProduct = products.filter(
    product =>
      (filter['color'] === ''
        ? true
        : product.color.findIndex(c => c.color === filter['color']) !== -1) &&
      (filter['size'] === ''
        ? true
        : product.size.findIndex(c => c.size === filter['size']) !== -1) &&
      product.category.name.indexOf(filter['category']) !== -1 &&
      product.name.toLowerCase().indexOf(filter['name'].toLowerCase()) !== -1,
  );

  const handleFilterChange = currentFilter => {
    setfilter({...filter, ...currentFilter});
  };

  return (
    <Box flex={1}>
      <Header
        size={size}
        color={color}
        filter={filter}
        onFilterChange={handleFilterChange}
      />

      {products.length === 0 && <Loading />}
      {filterProduct.length === 0 && products.length !== 0 && <Empty />}

      {filterProduct.length !== 0 && products !== 0 && (
        <FlatList
          flex={1}
          numColumns={2}
          data={filterProduct}
          keyboardDismissMode="on-drag"
          keyExtractor={item => item._id}
          contentContainerStyle={{padding: 8}}
          renderItem={({item}) => (
            <ProductListItem navigation={navigation} product={item} />
          )}
        />
      )}
    </Box>
  );
}
