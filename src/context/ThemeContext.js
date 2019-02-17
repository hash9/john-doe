import React from 'react';

const themeColor = {
	richRed: '#d23669',
	lightRed: '#ffa7c4',
	soWhite: 'white',
	soBlack: 'black',
	notSoBlack: '#282c35',
	grey :'#e6e6e6',
};

export const themeConfig = {
	light: {
		body: themeColor['soWhite'],
		content: themeColor['soBlack'],
		hXl: themeColor['richRed'],
		mainTitle: themeColor['richRed'],
		link: themeColor['richRed'],
	},
	dark: {
		body: themeColor['notSoBlack'],
		content: themeColor['grey'],
		hXl: themeColor['soWhite'],
		mainTitle: themeColor['lightRed'],
		link: themeColor['lightRed'],
	}
};

const ThemeContext = React.createContext(themeConfig.light);
export default ThemeContext;

