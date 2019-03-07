import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as colors from '../../themes/colors';

const mode = {
  dark: {
    color: colors.grey,
  },
  light: {
    color: colors.soBlack,
  },
};

const StyledPara = styled.p`
  font-family: 'Merriweather', 'Georgia', serif;
  font-weight: 400;
  font-kerning: normal;
  line-height: 1.75;
  color: ${props => mode[props.themeColor].color};
`;

const Para = props => {
  return <StyledPara {...props}>{props.children}</StyledPara>;
};

Para.propTypes = {
  themeColor: PropTypes.string,
};

Para.defaultProps = {
  themeColor: 'light',
};

export default Para;
