import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NOOP = () => {};

const Styled = styled.label`
  position: relative;
  display: inline-block;
  width: 52px;
  height: 27px;

  > input {
    display: none;
  }

  > span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: '';
      height: 19px;
      width: 19px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.2s;
      transition: 0.2s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: #ccc;
  }

  input:checked + span:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
  }
`;

const Toggle = props => {
  return (
    <Styled>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.toggleTheme}
      />
      <span />
    </Styled>
  );
};

Toggle.propTypes = {
  checked: PropTypes.bool,
  toggleTheme: PropTypes.func,
};

Toggle.defaultProps = {
  checked: false,
  toggleTheme: NOOP,
};

export default Toggle;
