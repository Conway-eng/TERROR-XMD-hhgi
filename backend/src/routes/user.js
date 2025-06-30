const express = require('express');
const { register, login, claimCoins, transferCoins, joinChannel, referral } = require('../controllers/userController');
const { authenticateJWT } = require('../middleware/auth');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/claim', authenticateJWT, claimCoins);
router.post('/transfer', authenticateJWT, transferCoins);
router.post('/join-channel', authenticateJWT, joinChannel);
router.post('/referral', authenticateJWT, referral);

module.exports = router;
