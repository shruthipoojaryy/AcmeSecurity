const express = require('express');
const router = express.Router();

const secrets = {
  secretKey: process.env.SECRET_KEY,
  encryptionKey: Buffer.from(process.env.ENCRYPTION_KEY).toString('base64')
};


router.get('/', (req, res) => {
  res.json(secrets);
});

module.exports = router;
