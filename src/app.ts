import express from 'express';
import cors from 'cors';
import dotenvConfig from './config/dotenvConfig';
import connectDB from './utils/connectDB';
import security from './config/security';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import roleRoutes from './routes/roleRoutes';
import errorHandler from './middlewares/errorHandler';

// Load environment variables
dotenvConfig();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Set up security middleware
security(app);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes); // <-- Adding role management routes

// Global error handler
app.use(errorHandler);

export default app;
