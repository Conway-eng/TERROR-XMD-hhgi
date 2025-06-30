const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
const botRoutes = require('./bot');
const adminRoutes = require('./admin');
const complaintRoutes = require('./complaint');

router.use('/user', userRoutes);
router.use('/bot', botRoutes);
router.use('/admin', adminRoutes);
router.use('/complaint', complaintRoutes);

module.exports = router;
