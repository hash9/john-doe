import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as colors from '../../themes/colors';

const NOOP = () => {};
const EMPTY_STRING = '';

const StyledHeaderR = styled.h2`
	color: ${colors.lightRed};
	font-family: 'Montserrat', sans-serif;
	cursor: pointer;
	font-weight: 900;
}
`;

const HeaderR = props => {
  return (
    <StyledHeaderR {...props} onClick={props.onClick}>
      {props.text}
    </StyledHeaderR>
  );
};

HeaderR.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

HeaderR.defaultProps = {
  onClick: NOOP,
  text: EMPTY_STRING,
};

export default HeaderR;
