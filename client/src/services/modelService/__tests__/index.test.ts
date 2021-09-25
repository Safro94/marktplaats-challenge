import ModelService from '..';
import fetcher from '../../../utils/fetcher';

jest.mock('../../../utils/fetcher');

describe('Model Service', () => {
	const brandId = 1;
	const handleError = jest.fn();

	it('should call the fetcher and return an empty array when there is no data', async () => {
		(fetcher as jest.Mock).mockImplementation(() =>
			Promise.resolve({ data: null })
		);

		const result = await ModelService.getModelByBrandId(brandId, handleError);

		expect(result).toStrictEqual([]);
		expect(fetcher).toHaveBeenCalledTimes(1);
		expect(fetcher).toHaveBeenCalledWith({ url: `/models?brandId=1` });
	});

	it('should call the fetcher and return the results when there is data', async () => {
		const results = [{ name: 'ferrari', id: 1 }];

		(fetcher as jest.Mock).mockImplementation(() =>
			Promise.resolve({ data: results })
		);

		const result = await ModelService.getModelByBrandId(brandId, handleError);

		expect(result).toStrictEqual(results);
		expect(fetcher).toHaveBeenCalledTimes(1);
		expect(fetcher).toHaveBeenCalledWith({ url: `/models?brandId=1` });
	});
});
