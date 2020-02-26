import React from 'react';
import { Spring } from 'react-spring';
import styled from '@emotion/styled';

import TwitterImg from "../images/twitter.png";
import LinkedInImg from "../images/linkedin.png";

const TwitterLink = "https://twitter.com/tomWritesCode";
const LinkedInLink = "https://www.linkedin.com/in/tomwritescode/";

const IconWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  margin-bottom: 15px;
a{
  display: inline-block;
  transition: transform 1.6s;

  &:hover{
    transition: transform 0.9s;
    transform: scale(1.2);
    
  }
}

img{
  height: 100px;
  width: auto;
  box-shadow: unset;
	transition: ease-in-out 200ms;
  margin: 10px;

  @media(min-width: 840px){
    height: 150px;
  }

  &:hover{
    box-shadow: none;
  }
}
`;

const ContactPoints = () => (
  <Spring from={{ opacity: 0, paddingTop: '100px' }} to={{ opacity: 1, paddingTop: '0px' }} delay={300}>
		{styles => (
        <IconWrapper styles={styles}>
          <a href={TwitterLink} target='_blank' rel="noopener noreferrer"><img src={TwitterImg} alt="Twitter Logo" /></a>
          <a href={LinkedInLink} target='_blank' rel="noopener noreferrer"><img src={LinkedInImg} alt="LinkedIn Logo" /></a>
        </IconWrapper>
    )}
  </Spring>
);

export default ContactPoints;