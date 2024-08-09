const express = require('express');
const router = express.Router();


const tokens = {
  githubToken: 'ghp_abcdef1234567890',
  slackToken: 'xoxb-1234-567890-abcdefghij'
};


router.get('/', (req, res) => {
  res.json(tokens);
});

module.exports = router;
