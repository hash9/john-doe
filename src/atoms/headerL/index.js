import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as colors from '../../themes/colors';

const NOOP = () => {};
const EMPTY_STRING = '';

const StyledHeaderL = styled.h2`
	color: ${colors.lightRed};
	font-family: 'Montserrat', sans-serif;
	cursor: pointer;
	font-weight: 900;
	font-size: 2.5rem;
}
`;

const HeaderL = props => {
  return (
    <StyledHeaderL {...props} onClick={props.onClick}>
      {props.text}
    </StyledHeaderL>
  );
};

HeaderL.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

HeaderL.defaultProps = {
  onClick: NOOP,
  text: EMPTY_STRING,
};

export default HeaderL;
