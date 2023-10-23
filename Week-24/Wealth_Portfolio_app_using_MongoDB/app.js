const express = require('express');
const mongoose = require('./config/database');
const assetRoutes = require('./routes/assetRoutes');
const financialRoutes = require('./routes/financialRoutes');

const app = express();
app.use(express.json());

app.use('/api/assets', assetRoutes);
app.use('/api/financial-records', financialRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
