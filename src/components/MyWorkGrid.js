import React from "react"
import styled from '@emotion/styled';


const WorkGrid = styled.div`
  color: ghostwhite;
  display: grid;
  grid-template-columns: 49% 49%;


  @media(max-width: 805px) {
    grid-template-columns: 100%;
  }
`;

const Card = styled.div`
  scale: 0.9;
  font-family: sans-serif;
  padding: 15px 20px;
  border-radius: 15px;
  border: solid 3px #00feff7a;
  text-decoration: none;
  background: linear-gradient(125deg, #16161d 25%, #ae52d47a 100%);
  transition: all 500ms ease-in-out;
  
  &:hover{
    background: linear-gradient(125deg, #16161d 25%, #00feff59 100%);
    border: solid 3px #ae52d47a;
    transition: all 500ms ease-in-out;
  }

  .StackContainer{
    margin: 10px 0 20px 0;
    text-align: center;
  }
  span{
    min-width: 100px;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-around;
    flex-grow: 1;
    
  }

  a{
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 10px;
    font-size: 1.2rem;

    @media(max-width: 806px){
      font-size: 1rem;
    }
  }
`;

const Projects = [
  {
    projectName: "<tomWritesCode />",
    githubLink: "https://github.com/tomWritesCode/tomWritesCode",
    projectLink: "",
    stack: [
      "Gatsby",
      "Emotion",
      "Contentful",
      "Netlify",
    ],
    blurb: "My personal website was built with Gatsby and styled with Emotion, the Blog is built with Contentful and hosted on Netlify."
  },
  {
    projectName: "Bit Rates Are Us",
    githubLink: "https://github.com/tomWritesCode/Blackmagic_Calculator",
    projectLink: "",
    stack: [
      "HTML",
      "CSS",
      "Vanilla JavaScript"
    ],
    blurb: "Bit Rates Are Us was made to do quick calculations for how much storage my Blackmagic Pocket 4K video camera uses. I use the calculation for working out how much storage I would use for making smaller videos for volunteer work."
  },
  {
    projectName: "raspberryScraper",
    githubLink: "https://github.com/tomWritesCode/raspberryScraper",
    projectLink: "",
    stack: [
      "NodeJS",
    ],
    blurb: "I made a colour theme for VS Code and to go with that I learnt how to make a Node web scraper that will go to the page, sift through the DOM using Puppeteer and return the number of downloads to my terminal."
  },
  {
    projectName: "Basketball NoStarz",
    githubLink: "https://github.com/tomWritesCode/basketballNoStarz",
    projectLink: "",
    stack: [
      "React",
      "NextJS",
      "Styled-components",
      "Zeit Now",
    ],
    blurb: "Basketball NoStarz is a scoreboard application I built to track scores of the games I am playing with my brother on my days off from work."
  },
  {
    projectName: "dadJokes()",
    githubLink: "https://github.com/tomWritesCode/dadJokes",
    projectLink: "",
    stack: [
      "Gatsby",
      "Vanilla JavaScript"
    ],
    blurb: "There was a running joke at the Code Heart Design Conference that we needed dad jokes in between the silence of people switching laptops. This was made the very next day."
  },
];



const projectCard = Projects.map((Project, index) => 
  <Card key={Project + index}>
    <h2>{Project.projectName}</h2>
    <h4>{Project.blurb}</h4>
    <div className='StackContainer'>
        <h4 style={{textDecoration: 'underline'}} key="key">What it's built with.</h4>
        {Object.values(Project.stack.map((Item) => <span>{Item}</span>))}
      </div>
    <a href={Project.projectLink} target='_blank' rel="noopener noreferrer">- Check out the Project -</a>
    <a href={Project.githubLink} target='_blank' rel="noopener noreferrer">- See the Repo on Github -</a>
  </Card>
);

const MyWorkGrid = () => (
  <WorkGrid>
    {projectCard}
  </WorkGrid>
)

export default MyWorkGrid;

// TODO: set from the ProjectCards SubPiece showing off work. 