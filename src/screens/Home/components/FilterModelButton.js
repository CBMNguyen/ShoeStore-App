import {Button, Icon} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function FilterModelButton({
  color,
  category,
  size,
  setSize,
  setColor,
  setCategory,
  setShowModal,
  onFilterChange,
}) {
  const handleFilterChange = filter => {
    if (!onFilterChange) return;
    onFilterChange(filter);
  };

  return (
    <Button.Group flex={1} marginBottom={3} marginRight={3}>
      <Button
        flex={1}
        size="md"
        colorScheme="primary"
        _text={{fontWeight: 'bold', fontSize: 18}}
        startIcon={<Icon as={Ionicons} name="reload-outline" size={5} />}
        onPress={() => {
          setSize('');
          setColor('');
          setCategory('');
          handleFilterChange({color: '', category: '', size: ''});
        }}>
        Reset
      </Button>

      <Button
        flex={1}
        size="md"
        colorScheme="secondary"
        _text={{fontWeight: 'bold', fontSize: 18}}
        startIcon={<Icon as={Ionicons} name="funnel" size={5} />}
        onPress={() => {
          handleFilterChange({color, category, size});
          setShowModal(false);
        }}>
        Filter
      </Button>
    </Button.Group>
  );
}
