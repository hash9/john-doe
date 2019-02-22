import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as colors from '../../themes/colors';

const StyledSeperator = styled.hr`
	border: none;
	height: 1px;
	background-color: ${props => props.backgroundColor};
	margin-top: 5%;
	margin-bottom: 5%;
}
`;

const Seperator = props => {
  return <StyledSeperator {...props} />;
};

Seperator.propTypes = {
  backgroundColor: PropTypes.string,
};

Seperator.defaultProps = {
  backgroundColor: colors.seperatorGrey,
};

export default Seperator;
