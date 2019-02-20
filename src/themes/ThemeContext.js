import React from 'react';
import * as colors from '../themes/colors';

export const themeConfig = {
	light: {
		body: colors.soWhite,
		content: colors.soBlack,
		hXl: colors.richRed,
		mainTitle: colors.richRed,
		link: colors.richRed,
	},
	dark: {
		body: colors.notSoBlack,
		content: colors.grey,
		hXl: colors.soWhite,
		mainTitle: colors.lightRed,
		link: colors.lightRed,
	}
};

const ThemeContext = React.createContext(themeConfig.light);
export default ThemeContext;

