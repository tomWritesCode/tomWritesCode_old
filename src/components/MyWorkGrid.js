import React from "react"
import styled from '@emotion/styled';

const WorkGrid = styled.div`
  color: ghostwhite;
  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 2%;
`;

const Card = styled.div`
  font-family: sans-serif;
  padding: 15px 20px;
  border-radius: 15px;
  background: linear-gradient(125deg, #16161d 25%, #ae52d47a 100%);
  border: solid 3px #00feff7a;
  transition: all 500ms ease;
  
  
  &:hover{
    background: linear-gradient(125deg, #16161d 25%, #00feff7a 100%);
    border: solid 3px #ae52d47a;
    transition: all 500ms ease;
  }

  .StackContainer{
    margin: 10px 0 20px 0;
  }
  span{
    min-width: 100px;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-around;
    flex-grow: 1;
    
  }
`;

const Projects = [
  {
    projectName: "<tomWritesCode />",
    stack: [
      "Gatsby",
      "Emotion",
      "Contentful",
      "Netlify",
    ],
    blurb: "My personal website was built with Gatsby and styled with Emotion, the Blog is built with Contentful and hosted on Netlify."
  },
  {
    projectName: "raspberryCandy",
    stack: [
      
    ],
    blurb: "A colour theme for Visual Studio Code I made that is a neon/pastel base on a dark background."
  },
  {
    projectName: "Basketball NoStarz",
    stack: [
      "React",
    ],
    blurb: "Basketball NoStarz is a scoreboard application I built to track scores of the games I am playing with my brother on my days off from work."
  },
];

const projectCard = Projects.map((Project, index) => 
  <Card key={Project + index}>
    <h2>{Project.projectName}</h2>
    <div className='StackContainer'>
      {Object.values(
        Project.stack.map((Item) => <span>{Item}</span>))}
    </div>
    <h4>{Project.blurb}</h4>
  </Card>
);

const MyWorkGrid = () => (
  <WorkGrid>
    {projectCard}
  </WorkGrid>
)

export default MyWorkGrid;

// TODO: set from the ProjectCards SubPiece showing off work. 