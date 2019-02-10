import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledHeaderXL = styled.h2`
	color:#d23669;
	font-family: 'Montserrat', sans-serif;
	font-weight: 900;
	font-size: 2.5rem;
}
`

const HeaderXL = props => {
	return (
		<StyledHeaderXL {...props} onClick={props.onClick}>{props.text}</StyledHeaderXL>
	)
}

HeaderXL.propTypes = {
	onClick: PropTypes.func,
  text: PropTypes.string,
}

HeaderXL.defaultProps = {
	onClick: () => {},
  text: '',
}

export default HeaderXL;
