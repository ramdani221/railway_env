var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const message = process.env.MESSAGE
  res.status(200).send(message);
});

module.exports = router;
