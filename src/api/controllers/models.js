const modelService = require('../../services/modelService');

const getModelsByBrandId = async (req, res) => {
	const { brandId } = req.query;
	if (!brandId) return res.json([]);

	const result = await modelService.getByBrandId(parseInt(brandId));
	res.json(result);
};

module.exports = {
	getModelsByBrandId,
};
