import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import { Spring } from "react-spring";
import styled from '@emotion/styled';
import Wrapper from "../components/PageWrapper";

const raspberryCandy = "https://marketplace.visualstudio.com/items?itemName=tomWritesCode.raspberryCandy";

const SectionWrapper = styled.div`
  padding: 5px 10px;

  .sectionTitle {
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.colors.blue};
  }

  ul {
    padding-left: 10px;
  }

  li {
    list-style: circle;
    span{
      font-weight: bold;
    }
  }
`;

const Uses = () => (
  <Layout>
    <Helmet
      title="<tomWritesAboutWhatHeUses />"   
    />
    <Spring
			from={{ marginTop: "-20px", opacity: 0 }}
			to={{ marginTop: "0", opacity: 1 }}
    >
      {styles => (
        <Wrapper style={styles}>
          <h3>Well, I am a gear nerd and it seems everyone seems to have a page about what they use. Here is mine.</h3>

          <SectionWrapper>
            <h3 className="sectionTitle">Software</h3>
            <p>I have a variety of different software that I use. My software setup is based around web development, screen recording and video editing.</p>
              <ul>
                <li><span className="sectionTitle">Text Editor</span> - VS Code</li>
                <li><span className="sectionTitle">Color Theme</span> - <a href={raspberryCandy}>raspberryCandy</a></li>
                <li><span className="sectionTitle">Terminal</span> - iTerm2</li>
                <li><span className="sectionTitle">Gif Recording</span> - Kap</li>
                <li><span className="sectionTitle">Screen Recording</span> - iShowU Instant</li>
                <li><span className="sectionTitle">Video Editor</span> - DaVinci Resolve</li>
              </ul>
              
            <hr /> <br />

            <h3 className="sectionTitle">Computer Gear</h3>
            <ul>
              <li>MacBook Pro 13"</li>
              <li>Satechi USB-C multi-port hub</li>
            </ul>
            <h4 className="sectionTitle">Editing PC - The DaVinci Resolver</h4>
            <p>The video camera I picked requires a lot of processing power. I decided to bite the bullet and build something that would work really well.</p>
            <ul>
            <li><span className="sectionTitle">CPU</span> - Ryzen 5 3600</li>
            <li><span className="sectionTitle">GPU</span> - MSI GTX1060 6GB</li>
            <li><span className="sectionTitle">RAM</span> - 32GB Corsair Vengeance Pro 3200MHz</li>
            <li><span className="sectionTitle">Boot Drive</span> - 500GB Samsung 970 Evo</li>
            <li><span className="sectionTitle">Scratch Disk</span> - 1TB Samsung 860 Evo</li>
            <li><span className="sectionTitle">Case</span> - Corsair 280x Micro-ATX</li>
            </ul>
            <h4 className="sectionTitle">Peripherals</h4>
            <p>My monitor, keyboard and mouse work back and forth with both the laptop and my desktop. The Rode mic is an awesome addition to my setup and makes a huge difference.</p>
            <ul>
              <li><span className="sectionTitle">Monitor</span> - LG 34" 21:9 Ultra-wide monitor - lg34um69g</li>
              <li><span className="sectionTitle">Keyboard</span> - Keychron K2 Keyboard - Red Switches</li>
              <li><span className="sectionTitle">Mouse</span> - Logitech MX Master 3</li>
              <li><span className="sectionTitle">Microphone</span> - Rode NT-USB</li>
            </ul>

            <hr /> <br />
            
            <h3 className="sectionTitle">Camera Gear</h3>
            <p>I decided that this year that I will be making video content, both for development and also for a photography channel Inside Framelines.</p>
            <ul>
              <li><span className="sectionTitle">Camera</span> - Blackmagic Design Pocket Cinema Camera 4k</li>
              <li><span className="sectionTitle">Lens</span> - Panasonic 25mm f1.7</li>
              <li><span className="sectionTitle">Microphone</span> - Rode VideoMic NTG</li>
              <li><span className="sectionTitle">Storage Media</span> - Samsung T5 - 500GB</li>
            </ul>

            <hr/><br/>
          </SectionWrapper>
        </Wrapper>
      )}
    </Spring>
  </Layout>
);

export default Uses;
