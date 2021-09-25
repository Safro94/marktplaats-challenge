import fetcher from '../../utils/fetcher';

class BrandService {
	static async getBrands(handleError: any) {
		return await fetcher({ url: `/brands` }).then(({ data }) => {
			if (!data) return [];

			return data;
		}, handleError);
	}
}

export default BrandService;
