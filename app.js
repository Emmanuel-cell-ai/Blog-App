require('dotenv').config();
const app = require('./src/index.js');
const connectDB = require('./src/config/db.config.js');
const checkEnvVariables = require('./checkenv.js');

checkEnvVariables();



app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
});
