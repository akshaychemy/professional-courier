import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Users from './pages/Users';
import Couriers from './pages/Couriers';
import Addresses from './pages/Addresses';
import Packages from './pages/Packages';
import Trackings from './pages/Trackings';
import Payments from './pages/Payments';
import Notifications from './pages/Notifications';
import Services from './pages/Services';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/couriers" element={<Couriers />} />
        <Route path="/addresses" element={<Addresses />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/trackings" element={<Trackings />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
