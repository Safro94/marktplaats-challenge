const { getByBrandId } = require('../modelClient');

describe('Model Client', () => {
	it('should return the data filtered by the brandId when getByBrandId is called', async () => {
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

		const result = await getByBrandId(brandId);

		expect(result).toStrictEqual(expectedResult);
	});
});
