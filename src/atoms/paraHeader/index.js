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

const StyledParaHeader = styled.h3`
  padding: 0;
  margin: 1.75rem 0 1.75rem 0;
  font-family: 'Merriweather', 'Georgia', serif;
  font-weight: 900;
  text-rendering: optimizeLegibility;
  font-size: 1.4427rem;
  line-height: 1.1;
  color: ${props => mode[props.themeColor].color};
`;

const ParaHeader = props => {
  return <StyledParaHeader {...props}>{props.text}</StyledParaHeader>;
};

ParaHeader.propTypes = {
  text: PropTypes.string,
  themeColor: PropTypes.string,
};

ParaHeader.defaultProps = {
  text: '',
  themeColor: 'light',
};

export default ParaHeader;
