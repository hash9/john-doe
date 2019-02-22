import React from 'react';
import styled from 'styled-components';
import * as colors from '../../themes/colors';
import PropTypes from 'prop-types';

const EMPTY_STRING = '';

const StyledAnchor = styled.a`
  color: ${colors.richRed};
  box-shadow: 0 1px 0 0;

  &:hover {
    color: ${colors.richRed};
    box-shadow: 0 0 0 0;
  }
`;

const Anchor = props => {
  return (
    <StyledAnchor {...props} href={props.href}>
      {props.text}
    </StyledAnchor>
  );
};

Anchor.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

Anchor.defaultProps = {
  href: EMPTY_STRING,
  text: EMPTY_STRING,
};

export default Anchor;
