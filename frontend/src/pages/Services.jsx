import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../store/reducers/serviceReducer';
import ServiceForm from '../components/ServiceForm';

const Services = () => {
  const dispatch = useDispatch();
  const { services } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <div>
      <h1>Services</h1>
      <ServiceForm />
      <ul>
        {services.map((service) => (
          <li key={service._id}>{service.name} - {service.description} - {service.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
