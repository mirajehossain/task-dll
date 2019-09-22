const express = require('express');

const router = express.Router();

const utils = require('../utils/index');

router.route('/').get((req, res) => {
  return res.json({ title: 'Hello world, Welcome to my application' });
});

router.route('/add').get(utils.add);


module.exports = router;
