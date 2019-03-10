import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as colors from '../../themes/colors';

const mode = {
  dark: {
    bgcolor: colors.highlightGrey,
    textcolor: colors.grey,
  },
  light: {
    bgcolor: colors.highlightYellow,
    textcolor: colors.highlightText,
  },
};

const StyledHighlight = styled.code`
  border-radius: 0.3em;
  background: ${props => mode[props.themeColor].bgcolor};
  color: ${props => mode[props.themeColor].textcolor};
  font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;
  padding: 0.15em 0.2em 0.05em;
  white-space: normal;
  line-height: 1.5;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  text-align: left;
`;

const Highlight = props => {
  return <StyledHighlight {...props}>{props.text}</StyledHighlight>;
};

Highlight.propTypes = {
  text: PropTypes.string,
  themeColor: PropTypes.string,
};

Highlight.defaultProps = {
  text: '',
  themeColor: 'light',
};

export default Highlight;
