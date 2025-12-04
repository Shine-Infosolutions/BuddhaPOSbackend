require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

app.get('/', (req, res) => {
  res.json({ 
    message: 'Buddha POS Backend API',
    endpoints: {
      menuItems: '/api/categories',
      orders: '/api/orders'
    }
  });
});

// Error handler
app.use(require('./middlewares/errorHandler'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});