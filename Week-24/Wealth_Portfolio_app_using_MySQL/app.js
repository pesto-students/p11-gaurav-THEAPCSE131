const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

// MySQL Connection Pooling
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Heart@2022',
  database: 'wealth_portfolio_db',
  connectionLimit: 10
});

// Asset Management Endpoints
app.get('/api/assets', (req, res) => {
  pool.query('SELECT * FROM assets', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.post('/api/assets', (req, res) => {
  const { type, description, value } = req.body;
  pool.query('INSERT INTO assets (type, description, value) VALUES (?, ?, ?)', [type, description, value], (error, result) => {
    if (error) throw error;
    res.status(201).send(`Asset added with ID: ${result.insertId}`);
  });
});

// Add other asset management endpoints (PUT and DELETE) here

// Financial Records Endpoints
app.get('/api/financial-records', (req, res) => {
  pool.query('SELECT * FROM financial_records', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// Add other financial records endpoints (GET by year/month) here

// CRUD Operations Endpoints (Generic)
app.post('/api/:resource', (req, res) => {
  const { resource } = req.params;
  const data = req.body;
  pool.query(`INSERT INTO ${resource} SET ?`, data, (error, result) => {
    if (error) throw error;
    res.status(201).send(`${resource} added with ID: ${result.insertId}`);
  });
});

app.put('/api/:resource/:id', (req, res) => {
  const { resource, id } = req.params;
  const data = req.body;
  pool.query(`UPDATE ${resource} SET ? WHERE id = ?`, [data, id], error => {
    if (error) throw error;
    res.send(`${resource} with ID ${id} updated`);
  });
});

app.delete('/api/:resource/:id', (req, res) => {
  const { resource, id } = req.params;
  pool.query(`DELETE FROM ${resource} WHERE id = ?`, id, error => {
    if (error) throw error;
    res.send(`${resource} with ID ${id} deleted`);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
