import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledImage = styled.img`
	cursor: pointer;
`

const Avatar = props => {
  console.log(props.size,"props.size")
	return (
		<AvatarElement onClick={props.onClickImage} {...props}>
			<StyledImage
        src={props.image}
        alt={props.alt}
        {...props}
      />
		</AvatarElement>
	)
}

const AvatarElement = props => (
  <Avatar.Element {...props} />
)

Avatar.Element = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
	overflow: hidden;

  img {
    height: 100%;
    user-select: none;
  }
`
Avatar.propTypes = {
  /** Avatar size */
  size: PropTypes.number,
  /** Avatar image */
	image: PropTypes.string,
	alt: PropTypes.string,
}

Avatar.defaultProps = {
  size: 'large',
  image: null,
}

Avatar.displayName = 'Avatar'

export default Avatar
