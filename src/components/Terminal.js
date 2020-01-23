import React from 'react';
import { ReactTerminal } from "react-terminal";
import styled from '@emotion/styled';

const TerminalWrapper = styled.div`
  height: 300px;
  margin-bottom: 50px;
`;

const release = new Date("February 19, 2019 11:46:11");
const releaseDate = "February 19th, 2019";
const current = new Date();

function dateDiff() {
  let difference = current - release;
  return Math.round(difference / (60 * 60 * 24 * 1000));
}

const Terminal = () => {
  const commands = {
    tomwritescode: "--- tomWritesCode is built using Gatsby, Emotion for styling and Contentful for my blog. ",

    raspberrycandy: "--- raspberryCandy is a Dark, pastel/neon color theme I made. The follow up command for this is 'raspberryrelease'",

    raspberryrelease: `--- raspberryCandy has been out ${dateDiff()} days. It was released on ${releaseDate}.`,

    raspberryscraper: "--- raspberryScraper is a CLI web scraper that shows me how many times raspberryCandy has been downloaded."
  }
  
  return (
    <TerminalWrapper>
      <ReactTerminal 
      commands={commands}
      theme="dark"
      // welcomeMessage={`These commands are available ${Object.keys(commands)}`}
      prompt="༼ つ °□° ༽つ ==="
      errorMessage = {
        `Ohh, that one doesn't work try one of these: ${Object.keys(commands)}`
      }
      />
    </TerminalWrapper>
      );
    }

  export default Terminal;