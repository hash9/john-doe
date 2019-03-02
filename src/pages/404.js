import React from 'react';
import styled from 'styled-components';
import HeaderR from '../atoms/headerR';

const StyledDiv = styled.div`
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
`;

const StyledIframe = styled.iframe`
    position: absolute;
    top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
    border: 0;

  @media (max-width: 768px) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const NotFoundPage = props => {
  return (
    <StyledDiv>
      <HeaderR text={'Page not found'} style={{ textAlign: 'center' }} />
            
      <StyledIframe
        {...props}
        src="https://www.youtube.com/embed/TKILNbrWxBQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      />
          
    </StyledDiv>
  );
};

export default NotFoundPage;
