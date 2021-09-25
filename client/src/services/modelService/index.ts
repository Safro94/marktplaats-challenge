import fetcher from '../../utils/fetcher';

class ModelService {
	static async getModelByBrandId(brandId: number, handleError: any) {
		return await fetcher({ url: `/models?brandId=${brandId}` }).then(
			({ data }) => {
				if (!data) return [];

				return data;
			},
			handleError
		);
	}
}

export default ModelService;
