const mongoose = require('mongoose');

const financialRecordSchema = new mongoose.Schema({
  year: Number,
  month: Number,
  income: Number,
  expenses: Number,
  savings: Number
});

const FinancialRecord = mongoose.model('FinancialRecord', financialRecordSchema);

module.exports = FinancialRecord;
