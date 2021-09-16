import {VStack} from 'native-base';
import React from 'react';
import {useSelector} from 'react-redux';
import ControlOption from './components/ControlOption';
import PurchaseHistory from './components/PurchaseHistory';
import UserInfo from './components/UserInfo';

export default function Personal() {
  const {user} = useSelector(state => state.user);

  return (
    <VStack flex={1} backgroundColor="#fff" padding={5}>
      <UserInfo user={user} />

      <PurchaseHistory />

      <ControlOption />
    </VStack>
  );
}
