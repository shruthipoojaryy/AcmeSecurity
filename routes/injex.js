const express = require('express');
const router = express.Router();


router.get('/config', (req, res) => {
  res.json({
    apiKey: process.env.API_KEY,
    s3Bucket: process.env.S3_BUCKET,
    secretKey: Buffer.from(process.env.SECRET_KEY, 'base64').toString('utf-8')
  });
});

module.exports = router;
