const { mapBrands } = require('../utils/mapper');
const { get } = require('../integration/brandClient');

class BrandService {
	async get() {
		const items = await get();
		return mapBrands(items);
	}
}

module.exports = new BrandService();
