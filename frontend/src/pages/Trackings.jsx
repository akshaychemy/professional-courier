import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrackings } from '../store/reducers/trackingReducer';
import TrackingForm from '../components/TrackingForm';

const Trackings = () => {
  const dispatch = useDispatch();
  const { trackings } = useSelector((state) => state.trackings);

  useEffect(() => {
    dispatch(getTrackings());
  }, [dispatch]);

  return (
    <div>
      <h1>Trackings</h1>
      <TrackingForm />
      <ul>
        {trackings.map((tracking) => (
          <li key={tracking._id}>{tracking.packageId} - {tracking.status} - {tracking.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default Trackings;
