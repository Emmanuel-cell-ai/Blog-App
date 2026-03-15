require('dotenv').config();
const express = require('express');
const app = express();

const connectDB = require('./config/db.config.js');
const articleRoutes = require('./routes/Articleroutes.js');
const authRoutes = require('./routes/userRoutes.js');
const requestLogger = require('./middlewares/logger.js');
const errorHandler = require('./middlewares/errorHandler.js');
const cors = require('cors');


connectDB();

app.use(cors('*'));
app.use(requestLogger);

app.use(express.json());
app.use('/api', articleRoutes);
app.use('/api/auth', authRoutes);





app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})
