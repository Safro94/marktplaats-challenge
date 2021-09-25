const brandService = require('../../services/brandService');

const getBrands = async (_req, res) => {
	const result = await brandService.get();
	res.json(result);
};

module.exports = {
	getBrands,
};
