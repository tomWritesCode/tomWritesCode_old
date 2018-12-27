import React, { Component } from "react";
import styled from "@emotion/styled";
import { Spring } from "react-spring";
import ContactIcons from "./ContactIcons";

export default class Contact extends Component {
	render() {
		return (
			<div style={{textAlign: "center", fontFamily: "sans-serif"}}>
				Check out my GitHub and Twitter to see what I am up too, Or my LinkedIn
				for the professional bit.

        <Spring
          from={{marginTop: "-40px", opacity: 0}}
          to={{marginTop: "0", opacity: 1}}
        >
          {styles => (
            <ContactIcons style={styles} />
          )}
        </Spring>
			</div>
		);
	}
}
