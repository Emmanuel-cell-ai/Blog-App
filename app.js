require('dotenv').config();
const express = require('express');
const app = express();

const connectDB = require('./config/db.config.js');
const articleRoutes = require('./routes/Articleroutes');
const requestLogger = require('./middlewares/logger.js');
const errorHandler = require('./middlewares/errorHandler.js');
const cors = require('cors');


connectDB();

app.use(cors('*'));
app.use(requestLogger);
app.use(errorHandler);

app.use(express.json());
app.use('/api', articleRoutes);







const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})