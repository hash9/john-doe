import React from 'react';
import * as colors from '../themes/colors';

export const themeConfig = {
  light: {
    body: colors.soWhite,
    content: colors.soBlack,
    hXl: colors.richRed,
    mainTitle: colors.richRed,
    link: colors.richRed,
    seperator: colors.soBlack,
    mainDesc: colors.closeGrey,
    ring: colors.ringborder,
  },
  dark: {
    body: colors.notSoBlack,
    content: colors.grey,
    hXl: colors.soWhite,
    mainTitle: colors.lightRed,
    link: colors.lightRed,
    seperator: colors.grey,
    mainDesc: colors.grey,
    ring: colors.darkRingBorder,
  },
};

const ThemeContext = React.createContext(themeConfig.light);
export default ThemeContext;
