const express = require('express');
const asyncHandler = require('express-async-handler');
const { getModelsByBrandId } = require('../controllers/models');

const router = express.Router();

/*
 * GET request to api/models?brandId=1
 */
router.get('/', asyncHandler(getModelsByBrandId));

module.exports = router;
