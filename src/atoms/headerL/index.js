import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledHeaderL = styled.h2`
	color:#ffa7c4;
	font-family: 'Montserrat', sans-serif;
	cursor: pointer;
	font-weight: 900;
	font-size: 2.5rem;
}
`

const HeaderL = props => {
	return (
		<StyledHeaderL {...props} onClick={props.onClick}>{props.text}</StyledHeaderL>
	)
}

HeaderL.propTypes = {
	onClick: PropTypes.func,
  text: PropTypes.string,
}

HeaderL.defaultProps = {
	onClick: () => {},
  text: '',
}

export default HeaderL;
