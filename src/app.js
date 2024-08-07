const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { errors } = require('celebrate');
const config = require('./config/db');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(passport.initialize());
require('./auth/jwtStrategy');
passport.use(require('./auth/jwtStrategy'));

// Connect to database
connectDB();

app.use('/api/auth', require('./routes/auth'));
app.use('/api/students', require('./routes/students'));

// Error handling
app.use(errors());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
