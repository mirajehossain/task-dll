const express = require('express');

const router = express.Router();

const controller = require('../utils/controller');

router.route('/').get((req, res) => {
  return res.json({ title: 'Hello world, Welcome to my application' });
});

router.route('/add').post(controller.add);
router.route('/list').get(controller.list);


module.exports = router;
