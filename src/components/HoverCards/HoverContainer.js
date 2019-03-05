import React from "react";
// import { Spring } from "react-spring";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 300px;
  height: 450px;
  perspective: 900px;

  #c0 {     /* Gatsby Colour */
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgb(102, 51, 153) 30%, rgb(68, 34, 102) 100%);
    z-index: 300;
  }

  #c1 {
    background: linear-gradient(to bottom, #59476f 30%, #7b88d1 100%);
    box-shadow: 0px 20px 100px #555;
    left: 100%;
    z-index: 0;
  }

  #c2 {
    left: -100%;
    z-index: 0;
    background: linear-gradient(to bottom, #59476f 30%, #7b88d1 100%);
    box-shadow: 0px 20px 100px #555;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
  transition: .5s all ease;
  transform: rotateX(60deg) scale(0.7);
  perspective: 900px;
  animation: entry 1s linear 1;
  border-radius: 12px;

  &:hover {
    cursor: pointer;
    transform: rotate(0deg) scale(1) translateY(10px);
    transition: .5s all ease;
    z-index: 400;
  }
`;

const Story = styled.div`

`;

const Info = styled.div`
  h3{
    text-align: center;
    padding-top: 20px;
    margin-bottom: 5px;
  }
  p{
    font-family: sans-serif;
    padding: 5px 10px;
    text-align: center;
  }
`;


const HoverContainer = () => (
  <Wrapper>
    <Container id="c0">
      <Story id="s0">
        <Info>
          <h3>Gatsby</h3>
          <p> This website is built in Gatsby, I am always amazed at how fast the websites are and integration with things like Contentful which is where my blog's content is from.</p> 
          <p>
            As well as Gatsby this site is also built with:
              <br/> <br/>
              - Emotion
              <br />
              - React Spring
              <br />
              - Contentful
          </p>
        </Info>
      </Story>
    </Container>

    
  </Wrapper>
);

export default HoverContainer;