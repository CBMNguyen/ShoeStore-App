import {useToast, VStack} from 'native-base';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../../app/userSlice';
import {showToastError} from '../../utils/showToastError';
import {showToastSuccess} from '../../utils/showToastSuccess';
import ControlOption from './components/ControlOption';
import EditUserModal from './components/EditUserModal';
import PurchaseHistory from './components/PurchaseHistory';
import UserInfo from './components/UserInfo';

export default function Personal() {
  const toast = useToast();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const {user, loading} = useSelector(state => state.user);

  const handleUpdateProfile = async (data, singleImage) => {
    const formData = new FormData();

    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('image', singleImage);
    formData.append('gender', data.gender);
    formData.append('address', data.address);
    formData.append('lastname', data.lastname);
    formData.append('password', data.password);
    formData.append('firstname', data.firstname);

    try {
      await showToastSuccess(
        toast,
        dispatch(updateUser({_id: user._id, user: formData})),
      );
      setShowModal(false);
    } catch (error) {
      showToastError(toast, error);
    }
  };

  return (
    <VStack flex={1} backgroundColor="#fff" padding={5}>
      <UserInfo user={user} showModal={showModal} setShowModal={setShowModal} />

      <PurchaseHistory />

      <ControlOption />

      <EditUserModal
        user={user}
        loading={loading}
        showModal={showModal}
        setShowModal={setShowModal}
        onUpdateProfile={handleUpdateProfile}
      />
    </VStack>
  );
}
