import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddresses } from '../store/reducers/addressReducer';
import AddressForm from '../components/AddressForm';

const Addresses = () => {
  const dispatch = useDispatch();
  const { addresses } = useSelector((state) => state.addresses);

  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);

  return (
    <div>
      <h1>Addresses</h1>
      <AddressForm />
      <ul>
        {addresses.map((address) => (
          <li key={address._id}>
            {address.street}, {address.city}, {address.state}, {address.postalCode}, {address.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Addresses;
