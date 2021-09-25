import { mapDropdownOptions } from '../mapper';

describe('Mapper', () => {
	it('should return an array of objects when mapDropdownOptions is called', () => {
		const data = [
			{
				id: 1,
				name: 'ferrari',
			},
		];

		const expectedResult = [{ label: 'ferrari', value: '1' }];

		const result = mapDropdownOptions(data);

		expect(result).toStrictEqual(expectedResult);
	});
});
