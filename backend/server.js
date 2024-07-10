import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import courierRoutes from './routes/courierRoutes.js';
import addressRoutes from './routes/addressRoutes.js';
import packageRoutes from './routes/packageRoutes.js';
import trackingRoutes from './routes/trackingRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/couriers', courierRoutes);
app.use('/api/addresses', addressRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/trackings', trackingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/services', serviceRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
