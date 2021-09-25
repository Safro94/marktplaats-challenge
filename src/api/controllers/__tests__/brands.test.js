const { getBrands } = require('../brands');
const brandService = require('../../../services/brandService');

const { mockReq, mockRes, mappedBrands } = require('../../../utils/test-utils');

jest.mock('../../../services/brandService', () => {
	return {
		get: jest.fn(),
	};
});

describe('Brands Controller', () => {
	const res = mockRes();
	const req = mockReq();

	it('should call the service and return the data provided by the service when get is called', async () => {
		brandService.get.mockImplementation(() => mappedBrands);

		await getBrands(req, res);

		expect(brandService.get).toHaveBeenCalledTimes(1);
		expect(brandService.get).toHaveBeenCalledWith();

		expect(res.json).toHaveBeenCalledTimes(1);
		expect(res.json).toHaveBeenCalledWith(mappedBrands);
	});
});
