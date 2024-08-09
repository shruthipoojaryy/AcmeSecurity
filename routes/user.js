const express = require('express');
const router = express.Router();

const users = [
  { id: 1, username: 'admin', password: 'admin123' },
  { id: 2, username: 'user', password: 'user123' }
];

// Route exposing user credentials
router.get('/', (req, res) => {
  res.json(users);
});

module.exports = router;
