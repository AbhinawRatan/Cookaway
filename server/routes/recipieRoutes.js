const express = require('express');
const router = express.Router();
const recipieController = require('../contollers/recipieController');
/**
 * App Routes
 */

router.get('/', recipieController.homepage);
module.exports = router;
