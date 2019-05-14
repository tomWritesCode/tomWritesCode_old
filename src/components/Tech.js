import React from "react"
import styled from '@emotion/styled';
// import TechCard from "../PageSubPiece/TechCard";

const TechWrap = styled.div`
  font-family: sans-serif;
  color: ghostwhite;
  margin-bottom: 20px;

  .title{
    margin-top: 30px;
    margin-left: 20px;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

const TechCardWrap = styled.div `
  flex: 0 0 auto;
  height: auto;
  width: 250px;
  color: ghostwhite; 
  padding: 25px 20px 20px 20px; 
  border-radius: 14px;
  margin: 0 5px;
  background: linear-gradient(125deg, #16161d 25%, #ae52d47a 100%);
  border: solid 3px #00feff7a;
  transition: all 500ms ease;
  
  
  &:hover{
    background: linear-gradient(125deg, #16161d 25%, #00feff7a 100%);
    border: solid 3px #ae52d47a;
    transition: all 500ms ease;

  }
  
  p{
    font-size: 16px;
  }
`;


const tech = [
  {
    index: 1,
    name: 'ReactJS',
    blurb: 'I have been working with react for about 8 months in a variety of formats and projects.'
  },
  {
    index: 2,
    name: 'GatsbyJS',
    blurb: 'I have been using Gatsby since I did Scott Tolinksis Pro Gatsby Course while on a flight to London. I absolutely love how easy gatsby is to work with and get running.'
  },
  {
    index: 3,
    name: 'NextJS',
    blurb: 'Hmmmmm Pretty good Next, mate'
  },
  {
    index: 4,
    name: 'Emotion',
    blurb: `I'm getting emotional`
  },
  {
    index: 5,
    name: 'Styled Components',
    blurb: `Stylin`
  },
  {
    index: 6,
    name: 'NodeJS',
    blurb: `Ohhhh NodeJS.`
  },
];

const TechCard = tech.map((tech, index) => 
  <TechCardWrap key={tech + index}>
    <h2>{tech.name}</h2>
    // Logo Image
    <p>{tech.blurb}</p>
  </TechCardWrap>
  )

const Tech = () => (
  <TechWrap>
    <h2 className="title">Tech I work with.</h2>

    <TechList>
      {TechCard}
    </TechList>
  </TechWrap>
)

export default Tech;

// TODO: List of technologies I work with, Horizontal scroll cards like CSS Tricks

// [
//   {
//     tech: 'NAME',
//     logo: { LOGO }
//     blurb: 'I have been working with XXXX on X, Y, Z doing all the things.'
//   }
// ]
