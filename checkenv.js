const checkEnvVariables = () => {
    const requiredEnvVars = ['PORT', 'MONGODB_URI', 'JWT_SECRET'];
    const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);  
    if (missingEnvVars.length > 0) {
        console.error(`Error: Missing required environment variables: ${missingEnvVars.join(', ')}`);
        process.exit(1); 
    }   
    console.log('All required environment variables are set.');
};

module.exports = checkEnvVariables;