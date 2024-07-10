import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCouriers } from '../store/reducers/courierReducer';
import CourierForm from '../components/CourierForm';

const Couriers = () => {
  const dispatch = useDispatch();
  const { couriers } = useSelector((state) => state.couriers);

  useEffect(() => {
    dispatch(getCouriers());
  }, [dispatch]);

  return (
    <div>
      <h1>Couriers</h1>
      <CourierForm />
      <ul>
        {couriers.map((courier) => (
          <li key={courier._id}>{courier.name} - {courier.contactInfo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Couriers;
