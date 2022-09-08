import React from "react";
import styled from 'styled-components';
import { ButtonGroup } from "@material-ui/core";
import { Grid, Text, StyleButton, StyledLink } from "../elements/index";

const HeaderBar = (props) => {
  return (
    <React.Fragment>
      <header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 class="text-xl md:text-2xl font-bold">Woojin Log</h1>
          <nav>
            <ol
              style={{
                display: "flex",
              }}
            >
              <StyledLink to="/">
                <Text color="black">Main Page </Text>
              </StyledLink>
              <div
                style={{
                  marginRight: "3px",
                  marginLeft: "3px",
                }}
              >
                <Text color="black"> | </Text>
              </div>
              <AStyled 
              href="http://aboutme.dothome.co.kr/web/"
              // target="_blank"
              // class="link"
              // rel="noreferrer"
              >
                <Text color="black"> About me</Text>
              </AStyled>
            </ol>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

const AStyled = styled.a`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const buttonStyle = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
};

export default HeaderBar;
