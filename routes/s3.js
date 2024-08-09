const express = require('express');
const router = express.Router();
const s3Config = require('../config/s3');


router.get('/config', (req, res) => {
  res.json(s3Config);
});

module.exports = router;
