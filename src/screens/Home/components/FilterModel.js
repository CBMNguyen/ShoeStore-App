import {Icon, Modal, Text} from 'native-base';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BrandList from './BrandList';
import ColorList from './ColorList';
import FilterModelButton from './FilterModelButton';
import SizeList from './SizeList';

export default function FilterModel({filter, colors, sizes, onFilterChange}) {
  const [showModal, setShowModal] = useState(false);
  const [color, setColor] = useState(filter.color);
  const [size, setSize] = useState(filter.size);
  const [category, setCategory] = useState(filter.category);

  return (
    <>
      <Icon
        onPress={() => setShowModal(!showModal)}
        size="md"
        as={<Ionicons name="menu-outline" />}
        color="gray.800"
        marginTop={1}
      />

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content width={385} height={515} borderRadius={16}>
          <Modal.CloseButton />

          <Modal.Header>
            <Text fontSize={22} fontWeight="bold" color="rose.500">
              Filter Product
            </Text>
          </Modal.Header>

          <Modal.Body>
            <BrandList category={category} setCategory={setCategory} />
            <ColorList color={color} colors={colors} setColor={setColor} />
            <SizeList size={size} sizes={sizes} setSize={setSize} />
          </Modal.Body>

          <Modal.Footer>
            <FilterModelButton
              color={color}
              category={category}
              size={size}
              setSize={setSize}
              setColor={setColor}
              setCategory={setCategory}
              setShowModal={setShowModal}
              onFilterChange={onFilterChange}
            />
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}
