const express = require('express');
const router = express.Router();
const { registerUser, loginUser, uploadCloudinaryImage } = require('../controllers/userController');


router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/profile/image', uploadCloudinaryImage);

module.exports = router;
