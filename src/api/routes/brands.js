const express = require('express');
const asyncHandler = require('express-async-handler');
const { getBrands } = require('../controllers/brands');

const router = express.Router();

/*
 * GET request to api/brands
 */
router.get('/', asyncHandler(getBrands));

module.exports = router;
