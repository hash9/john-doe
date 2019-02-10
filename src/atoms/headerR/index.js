import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledHeaderR = styled.h2`
	color:#ffa7c4;
	font-family: 'Montserrat', sans-serif;
	cursor: pointer;
	font-weight: 900;
}
`

const HeaderR = props => {
	return (
		<StyledHeaderR {...props} onClick={props.onClick}>{props.text}</StyledHeaderR>
	)
}

HeaderR.propTypes = {
	onClick: PropTypes.func,
  text: PropTypes.string,
}

HeaderR.defaultProps = {
	onClick: () => {},
  text: '',
}

export default HeaderR;
