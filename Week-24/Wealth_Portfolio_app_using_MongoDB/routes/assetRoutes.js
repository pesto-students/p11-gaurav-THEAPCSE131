const express = require('express');
const router = express.Router();
const Asset = require('../models/asset');

router.get('/', (req, res) => {
  Asset.find({}, (err, assets) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(assets);
  });
});

router.post('/', (req, res) => {
  const { type, description, value } = req.body;
  const asset = new Asset({
    type,
    description,
    value
  });
  asset.save((err, savedAsset) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).json(savedAsset);
  });
});
// Add routes for updating and deleting assets if needed

module.exports = router;
