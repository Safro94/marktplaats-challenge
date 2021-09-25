import { theme } from '../';

describe('Theme', () => {
	it('should return a theme with breakpoints and palette', () => {
		const expectedTheme = {
			breakpoints: {
				mobile: `(min-width: 425px)`,
				tablet: `(min-width: 780px)`,
				laptop: `(min-width: 992px)`,
				desktop: `(min-width: 1240px)`,
			},

			palette: {
				common: {
					white: '#fff',
				},

				primary: {
					main: '#c7c7c7',
					text: '#4a494a',
				},
			},
		};

		expect(theme).toStrictEqual(expectedTheme);
	});
});
