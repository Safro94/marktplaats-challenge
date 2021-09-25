const { getModelsByBrandId } = require('../models');
const modelService = require('../../../services/modelService');

const { mockReq, mockRes } = require('../../../utils/test-utils');
const models = require('../../../data/models.json');

jest.mock('../../../services/modelService', () => {
	return {
		getByBrandId: jest.fn(),
	};
});

describe('Models Controller', () => {
	const res = mockRes();

	it('should not call the service and return an empty array when brandId is not defined', async () => {
		const req = mockReq({ query: {} });

		await getModelsByBrandId(req, res);

		expect(modelService.getByBrandId).not.toHaveBeenCalled();

		expect(res.json).toHaveBeenCalledTimes(1);
		expect(res.json).toHaveBeenCalledWith([]);
	});

	it('should call the service and return the data provided by the service when getByBrandId is called', async () => {
		const req = mockReq({ query: { brandId: 1 } });
		modelService.getByBrandId.mockImplementation(() => models);

		await getModelsByBrandId(req, res);

		expect(modelService.getByBrandId).toHaveBeenCalledTimes(1);
		expect(modelService.getByBrandId).toHaveBeenCalledWith(req.query.brandId);

		expect(res.json).toHaveBeenCalledTimes(1);
		expect(res.json).toHaveBeenCalledWith(models);
	});
});
