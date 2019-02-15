import React from 'react';

export const themeConfig = {
	light: {
		fontColor: 'black',
		bodybg: 'white',
		fontXl: '#d23669',
		listTitle: '#d23669',
		listRest: 'black',
		postTitle: '#d23669',
		blogMainTitle: '#d23669'  //dark red
	},
	dark: {
		fontColor: '#e6e6e6',
		bodybg: '#282c35',  //light black
		fontXl: 'white',
		listTitle: '#ffa7c4',
		listRest: '#e6e6e6',
		postTitle: '#ffa7c4', //light red
		blogMainTitle: '#ffa7c4' //grey
	}
};

const ThemeContext = React.createContext(themeConfig.light);
export default ThemeContext;

