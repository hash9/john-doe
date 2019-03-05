import React from 'react';
import styled from 'styled-components';

const resumeImage = require('../../assets/resume.png');

const StyledDiv = styled.div`
    height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
    width: 50%;
  height: 80%;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1280px) {
    width: 100%;
    height: 100%;
  }
`;

const Resume = props => {
  return (
    <StyledDiv>
      <StyledImg {...props} src={resumeImage} alt="" />
    </StyledDiv>
  );
};

export default Resume;
