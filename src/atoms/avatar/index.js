import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EMPTY_STRING = '';

const StyledImage = styled.img`
  cursor: pointer;
`;

const Avatar = props => {
  return (
    <AvatarElement {...props} onClick={props.onClickImage}>
      <StyledImage {...props} src={props.image} alt={props.alt} />
    </AvatarElement>
  );
};

const AvatarElement = props => <Avatar.Element {...props} />;

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
`;
Avatar.propTypes = {
  size: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
};

Avatar.defaultProps = {
  size: EMPTY_STRING,
  image: EMPTY_STRING,
  alt: EMPTY_STRING,
};

export default Avatar;
