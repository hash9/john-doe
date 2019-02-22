import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as colors from '../../themes/colors';

const EMPTY_STRING = '';
const NOOP = () => {};

const StyledHeaderXL = styled.h2`
	color: ${colors.richRed};
	font-family: 'Montserrat', sans-serif;
	font-weight: 900;
	font-size: 2.5rem;
}
`;

const HeaderXL = props => {
  return (
    <StyledHeaderXL {...props} onClick={props.onClick}>
      {props.text}
    </StyledHeaderXL>
  );
};

HeaderXL.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

HeaderXL.defaultProps = {
  onClick: NOOP,
  text: EMPTY_STRING,
};

export default HeaderXL;
