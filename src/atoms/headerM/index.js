import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as colors from '../../themes/colors';

const EMPTY_STRING = '';
const NOOP = () => {};

const StyledHeaderM = styled.h2`
	color: ${props => props.color};
	font-family: 'Montserrat', sans-serif;
	font-size: 1.75rem;
	font-weight: 900;
	cursor: pointer;
}
`;

const HeaderM = props => {
  return (
    <StyledHeaderM {...props} onClick={props.onClick}>
      {props.text}
    </StyledHeaderM>
  );
};

HeaderM.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  color: PropTypes.string,
};

HeaderM.defaultProps = {
  onClick: NOOP,
  text: EMPTY_STRING,
  color: colors.richRed,
};

export default HeaderM;
