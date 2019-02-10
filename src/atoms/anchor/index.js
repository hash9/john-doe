import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledAnchor = styled.a`
	color: #d23669;
	box-shadow: 0 1px 0 0;

	&:hover {
		color: #d23669;
		box-shadow: 0 0 0 0;
	}
`

const Anchor = props => {
	return (
		<StyledAnchor 
			href={props.href}
			{...props}
		>
			{props.text}
		</StyledAnchor>
	)
}

Anchor.propTypes = {
	href: PropTypes.string,
	text: PropTypes.string,
}

Anchor.defaultProps = {
	href: '',
	text: '',
}

export default Anchor;
