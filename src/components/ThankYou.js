import React from 'react';
import { Link } from "gatsby";
import styled from '@emotion/styled';

const Links = styled.div`
  a{
    height: 100%;
    width: 100%;
  }

  hr{
    margin: 35px 0 30px 0;
  }
  h2, h4{
    padding: 0 20px;
  }
`;

const ThankYou = () => (
  <>
    <h2>Thankyou for taking the time to submit the form.</h2>
    <h3>I will get back to you with a response as soon as I can, in the mean time where would you like to go?</h3>

    <Links>
      <hr />
        
      <Link
        to="/blog"
        style = {{
          textDecoration: "none",
          transition: "ease-in-out 200ms",
			  }}
      >
        <h2>My Blog</h2> 
        <h4>Check out the latest from what I have been learning and working on.</h4>
      </Link>

      <hr />
      
      <Link
        href="/gear"
        style = {{
          textDecoration: "none",
          transition: "ease-in-out 200ms",
			  }}
      >
        <h2>My Gear</h2> <h4>I'm a massive gear nerd and I love seeing what other people are using, check out what goes in my gear bag.</h4>
      </Link>
      
      <hr/>

      <a
        href = "https://github.com/tomWritesCode"
        target = "_blank"
        rel = "noopener noreferrer"
        style = {{
          textDecoration: "none",
          transition: "ease-in-out 200ms",
			  }}
      >
        <h2>GitHub</h2> <h4>You can look deeper into my projects and work on my GitHub.</h4>
      </a>
      
      <hr/>

      <a
        href = "https://www.linkedin.com/in/tomwritescode/"
        target = "_blank"
        rel = "noopener noreferrer"
        style = {{
          textDecoration: "none",
          transition: "ease-in-out 200ms",
			  }}
      >
        <h2>LinkedIn</h2> <h4>Feel free to get in touch with me through LinkedIn.</h4>
      </a>
      
      <hr/>
      
    </Links>
  </>
);

export default ThankYou;