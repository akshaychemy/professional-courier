import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPackages } from '../store/reducers/packageReducer';
import PackageForm from '../components/PackageForm';

const Packages = () => {
  const dispatch = useDispatch();
  const { packages } = useSelector((state) => state.packages);

  useEffect(() => {
    dispatch(getPackages());
  }, [dispatch]);

  return (
    <div>
      <h1>Packages</h1>
      <PackageForm />
      <ul>
        {packages.map((pkg) => (
          <li key={pkg._id}>{pkg.description} - {pkg.weight} - {pkg.dimensions}</li>
        ))}
      </ul>
    </div>
  );
};

export default Packages;
