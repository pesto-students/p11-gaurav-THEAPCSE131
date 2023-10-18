const express = require('express');
const router = express.Router();
const FinancialRecord = require('../models/financialRecord');

router.get('/', (req, res) => {
  FinancialRecord.find({}, (err, records) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(records);
  });
});

router.post('/', (req, res) => {
  const { year, month, income, expenses, savings } = req.body;
  const record = new FinancialRecord({
    year,
    month,
    income,
    expenses,
    savings
  });
  record.save((err, savedRecord) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).json(savedRecord);
  });
});
// Add routes for updating and deleting financial records if needed

module.exports = router;
