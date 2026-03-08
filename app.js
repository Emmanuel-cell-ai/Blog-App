require('dotenv').config();
const express = require('express');
const app = express();

const connectDB = require('./database/db');
const { connect } = require('mongoose');
const articleRoutes = require('./routes/Articleroutes');
const requestLogger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const Router = require('./routes/Articleroutes');
const cors = require('cors');


connectDB();

app.use(cors('*'));
app.use(requestLogger);
app.use(errorHandler);

app.use(express.json());
app.use('/api', Router);







const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})