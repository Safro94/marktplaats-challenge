import { BRANDS_ENDPOINT, MODELS_ENDPOINT } from '../endpoints';

describe('Endpoints', () => {
	it('should return the BRANDS_ENDPOINT', () => {
		const expectedEndpoint = '/api/brands';
		expect(BRANDS_ENDPOINT).toBe(expectedEndpoint);
	});

	it('should return the MODELS_ENDPOINT', () => {
		const expectedEndpoint = '/api/models';
		expect(MODELS_ENDPOINT).toBe(expectedEndpoint);
	});
});
