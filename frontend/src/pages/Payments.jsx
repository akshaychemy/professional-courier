import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPayments } from '../store/reducers/paymentReducer';
import PaymentForm from '../components/PaymentForm';

const Payments = () => {
  const dispatch = useDispatch();
  const { payments } = useSelector((state) => state.payments);

  useEffect(() => {
    dispatch(getPayments());
  }, [dispatch]);

  return (
    <div>
      <h1>Payments</h1>
      <PaymentForm />
      <ul>
        {payments.map((payment) => (
          <li key={payment._id}>{payment.amount} - {payment.method} - {payment.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default Payments;
