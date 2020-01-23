import React from "react"
import styled from '@emotion/styled';
import Projects from '../components/MyWorkGrid';

const WorkWrap = styled.div`
  hr {
		background: #00bcd4;
		box-shadow: 0 0 10px #00bcd4, 0 0 20px #00bcd4,
			0 0 30px #00bcd4;
	}
  h2{
    color: ghostwhite;
    margin-left: 20px;
  }
`;

const MyWork = () => (
  <WorkWrap>
    <hr/>
    <h2>I have made stuff. Look! Things!</h2>
    <Projects />
  </WorkWrap>
)

export default MyWork;

// TODO: set from the ProjectCards SubPiece showing off work. 