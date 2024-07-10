import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/couriers">Couriers</Link></li>
        <li><Link to="/addresses">Addresses</Link></li>
        <li><Link to="/packages">Packages</Link></li>
        <li><Link to="/trackings">Trackings</Link></li>
        <li><Link to="/payments">Payments</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
