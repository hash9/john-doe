import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as colors from '../../themes/colors';

const EMPTY_STRING = '';

const mode = {
  dark: {
    color: colors.grey,
    sideColor: colors.grey,
    bgColor: colors.notSoBlack,
  },
  light: {
    color: colors.soBlack,
    sideColor: colors.soBlack,
    bgColor: colors.soWhite,
  },
};

const StyledBlockquote = styled.blockquote`
  font-size: 1.1rem;
  margin: 40px auto;
  font-family: 'Merriweather', 'Georgia', serif;
  font-style: italic;
  color: ${props => mode[props.themeColor].color};
  padding: 1px 1px 1px 20px;
  border-left: 5px solid ${props => mode[props.themeColor].sideColor};
  line-height: 1.75rem;
  position: relative;
  background: ${props => mode[props.themeColor].bgColor};
`;

const Blockquote = props => {
  return <StyledBlockquote {...props}>{props.text}</StyledBlockquote>;
};

Blockquote.propTypes = {
  text: PropTypes.string,
  themeColor: PropTypes.string,
};

Blockquote.defaultProps = {
  text: EMPTY_STRING,
  themeColor: 'light',
};

export default Blockquote;
