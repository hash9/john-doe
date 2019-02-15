import React from 'react';

export const themeConfig = {
	light: {
		fontColor: 'black',
    bodybg: 'white',
	},
	dark: {
		fontColor: '#e6e6e6',
    bodybg: '#282c35',
	}
};

const ThemeContext = React.createContext(themeConfig.light);
export default ThemeContext;

