const { get } = require('../brandClient');
const brands = require('../../data/brands.json');

describe('Brand Client', () => {
	it('should return the data when get is called', async () => {
		const result = await get();

		expect(result).toStrictEqual(brands);
	});
});
