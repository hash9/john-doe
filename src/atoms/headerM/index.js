import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledHeaderM = styled.h2`
	color: ${props => props.color};
	font-family: 'Montserrat', sans-serif;
	font-size: 1.75rem;
	font-weight: 900;
	cursor: pointer;
}
`

const HeaderM = props => {
	return (
		<StyledHeaderM {...props} onClick={props.onClick}>{props.text}</StyledHeaderM>
	)
}

HeaderM.propTypes = {
	onClick: PropTypes.func,
	text: PropTypes.string,
	color: PropTypes.string,
}

HeaderM.defaultProps = {
	onClick: () => {},
	text: '',
	color: '#d23669'
}

export default HeaderM;
