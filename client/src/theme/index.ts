// theme.ts
import { DefaultTheme } from 'styled-components';
import { IBreakpoints } from '../types/styled';

const breakpoints: IBreakpoints = {
	mobile: '425px',
	tablet: '780px',
	laptop: '992px',
	desktop: '1240px',
};

export const theme: DefaultTheme = {
	breakpoints: {
		mobile: `(min-width: ${breakpoints.mobile})`,
		tablet: `(min-width: ${breakpoints.tablet})`,
		laptop: `(min-width: ${breakpoints.laptop})`,
		desktop: `(min-width: ${breakpoints.desktop})`,
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
