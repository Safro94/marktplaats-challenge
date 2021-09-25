const modelService = require('../modelService');

const { getByBrandId } = require('../../integration/modelClient');

jest.mock('../../integration/modelClient', () => {
	return {
		getByBrandId: jest.fn(),
	};
});

describe('Model Service', () => {
	it('should return an array of filtered items by brandId when getByBrandIdByBrandId is called', async () => {
		const brandId = 1;
		const expectedResult = [
			{
				id: 2,
				name: 'C30',
				brandId: 1,
				brand: 'mercedes-benz',
			},
			{
				id: 3,
				name: 'A38',
				brandId: 1,
				brand: 'mercedes-benz',
			},
		];
		getByBrandId.mockImplementation(() => expectedResult);

		const result = await modelService.getByBrandId(brandId);

		expect(result).toStrictEqual(expectedResult);

		expect(getByBrandId).toHaveBeenCalledTimes(1);
		expect(getByBrandId).toHaveBeenCalledWith(brandId);
	});
});
