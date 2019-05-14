import React from "react"
import styled from '@emotion/styled';
import Projects from '../components/MyWorkGrid';

const WorkWrap = styled.div`

  h2{
    color: ghostwhite;
    margin-left: 20px;
  }
`;

const MyWork = () => (
  <WorkWrap>
    <h2>I have made stuff. Look! Things!</h2>
    <Projects />
  </WorkWrap>
)

export default MyWork;

// TODO: set from the ProjectCards SubPiece showing off work. 