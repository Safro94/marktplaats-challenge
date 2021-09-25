const brandService = require('../brandService');
const { mapBrands } = require('../../utils/mapper');

const { get } = require('../../integration/brandClient');
const brands = require('../../data/brands.json');

const { mappedBrands } = require('../../utils/test-utils');

jest.mock('../../integration/brandClient', () => {
	return {
		get: jest.fn(),
	};
});

jest.mock('../../utils/mapper', () => {
	return {
		mapBrands: jest.fn(),
	};
});

describe('Brand Service', () => {
	it('should return an array of mapped items when the get method is called', async () => {
		get.mockImplementation(() => brands);
		mapBrands.mockImplementation(() => mappedBrands);

		const result = await brandService.get();

		expect(result).toStrictEqual(mappedBrands);

		expect(get).toHaveBeenCalledTimes(1);
		expect(get).toHaveBeenCalledWith();

		expect(mapBrands).toHaveBeenCalledTimes(1);
		expect(mapBrands).toHaveBeenCalledWith(brands);
	});
});
