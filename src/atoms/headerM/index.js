import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledHeaderM = styled.h2`
	color:#d23669;
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
}

HeaderM.defaultProps = {
	onClick: () => {},
  text: '',
}

export default HeaderM;
