var express = require('express');
var router = express.Router();

router.get('/message', function (req, res) {
  res.json('Welcome To React, Served');
});

module.exports = router;
