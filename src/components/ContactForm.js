import React from "react";
import styled from '@emotion/styled';

const FormWrapper = styled.div`
  margin-top: 20px;
  color: ghostwhite;
  font-family: sans-serif;

  form{
    margin: 0 auto;
    text-align: center;

    fieldset{
      padding: 20px;
      border: 2px solid #00feff7a;
      border-radius: 15px;
    }

    legend{
      color: #00feff;
      font-weight: bold;
    }

    .formRow{
      margin: 10px 0;

      label{
        font-weight: bold;
        margin-right: 10px; 
        font-weight: bold;
        font-size: 14pt;
        color: #ba51e5;
      }

      input, textarea{
        border-radius: 10px;
        background: #16161d;
        border: 1px solid #00feff;
        color: #00feff;

        &:focus{
          border: 2px solid #ba51e5;
          border-radius: 10px;
        }
      }

      textarea{
        max-width: 350px;
        width: 90%;
        height: 100px;
        display: block;
        margin: 0 auto;
      }
    }

    button{
      margin: 20px 0 0 10px;
      box-shadow: 0 0 10px #00bcd4, 0 0 20px #00bcd4;
      width: 140px;
      height: 40px;
      border-radius: 8px;
      background: #16161d;
      color: #00feff;
      transition: ease-in-out 300ms;

      &:hover{
        transform: scale(1.1);
        background: #00feff;
        color: #16161d;
        transition: ease-in-out 300ms;
        box-shadow: 0 0 10px #ba51e5, 0 0 20px #ba51e5;
        font-weight: bold;
      }
    }
  }

`;

const ContactForm = () => (
  <FormWrapper>
    <h3>Feel free to get in touch, I would love to hear about any new opportunities on offer, or just to make a new connection. I would love to hear from you.</h3>

    <form name="Your Next Dev Form" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/thankyou.js">
    <fieldset>

      <p class="hidden" style={{visibility: "hidden", height: 0}}>
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>

      <legend>Get in Touch</legend>
    
        <div className="formRow">
        <label htmlFor="name">Your Name: </label>
        <input type="text" id="name" name="name" />
        </div>
        
        <div className="formRow">
        <label htmlFor="email">Your Email: </label>
        <input type="email" id="email" name="email" />
        </div>
        
        <div className="formRow">
        <label htmlFor="company">Where are you from?: </label>
        <input type="text" id="company" name="company" />
        </div>
        
        <div className="formRow">
        <label htmlFor="message">What Can I help you with?: </label>
        <textarea id="message" name="Message" style={{marginTop: "10px"}} />
        </div>
        
        <button type="submit" >Send it!</button>

    </fieldset>
    </form>
  </FormWrapper>
);

export default ContactForm;