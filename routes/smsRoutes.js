const express = require('express');
const { createSms, getAllSms, formatAndSaveSms, getTotalAmount } = require('../controllers/smsController');

const router = express.Router();

router.post('/create', createSms);
router.get('/all', getAllSms);
router.post('/format', formatAndSaveSms);
router.get('/total-amount', getTotalAmount);  // New route for total amount

module.exports = router;
