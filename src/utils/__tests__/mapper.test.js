const { mapBrands } = require('../mapper');
const { mappedBrands } = require('../test-utils');

describe('Mapper', () => {
	it('should return an array of objects mapped correctly when mapBrands is called', () => {
		const brands = [
			{
				num_models: 3,
				img_url:
					'http://www.carlogos.org/uploads/car-logos/Chrysler-logo-1.jpg',
				max_car_id: 104,
				id: 1,
				name: 'Honda',
				avg_horsepower: 291.3333333333333,
				avg_price: 32971.666666666664,
			},
			{
				num_models: 8,
				img_url: 'http://www.carlogos.org/uploads/car-logos/Honda-logo-1.jpg',
				max_car_id: 152,
				id: 2,
				name: 'Ferrari',
				avg_horsepower: 190.625,
				avg_price: 27965.0,
			},
		];

		const result = mapBrands(brands);

		expect(result).toStrictEqual(mappedBrands);
	});
});
