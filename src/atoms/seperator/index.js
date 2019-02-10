import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSeperator = styled.hr`
	border: none;
	height: 1px;
	background-color: ${props => props.backgroundColor};
	margin-top: 5%;
	margin-bottom: 5%;
}
`

const Seperator = props => {
	return (
		<StyledSeperator {...props}>
		</StyledSeperator>
	)
}

Seperator.propTypes = {
  backgroundColor: PropTypes.string,
}

Seperator.defaultProps = {
  backgroundColor: 'rgba(0,0,0,0.2)',
}

export default Seperator;
