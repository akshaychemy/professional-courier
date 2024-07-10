import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// User APIs
export const fetchUsers = () => API.get('/users');
export const createUser = (user) => API.post('/users', user);
// Add other CRUD APIs similarly

// Courier APIs
export const fetchCouriers = () => API.get('/couriers');
export const createCourier = (courier) => API.post('/couriers', courier);
// Add other CRUD APIs similarly

// Address APIs
export const fetchAddresses = () => API.get('/addresses');
export const createAddress = (address) => API.post('/addresses', address);
// Add other CRUD APIs similarly

// Package APIs
export const fetchPackages = () => API.get('/packages');
export const createPackage = (pkg) => API.post('/packages', pkg);
// Add other CRUD APIs similarly

// Tracking APIs
export const fetchTrackings = () => API.get('/trackings');
export const createTracking = (tracking) => API.post('/trackings', tracking);
// Add other CRUD APIs similarly

// Payment APIs
export const fetchPayments = () => API.get('/payments');
export const createPayment = (payment) => API.post('/payments', payment);
// Add other CRUD APIs similarly

// Notification APIs
export const fetchNotifications = () => API.get('/notifications');
export const createNotification = (notification) => API.post('/notifications', notification);
// Add other CRUD APIs similarly

// Service APIs
export const fetchServices = () => API.get('/services');
export const createService = (service) => API.post('/services', service);
// Add other CRUD APIs similarly
