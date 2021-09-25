const { getByBrandId } = require('../integration/modelClient');

class ModelService {
	async getByBrandId(brandId) {
		return await getByBrandId(brandId);
	}
}

module.exports = new ModelService();
