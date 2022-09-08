import React from "react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Zoom from "@material-ui/core/Zoom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Image, Text } from "../elements";
import { makeStyles } from "@material-ui/core/styles";

const OpenSourceZoomPanel = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: 180,
    },
    container: {
      display: "flex",
    },
    paper: {
      margin: theme.spacing(2),
    },
    svg: {
      width: 100,
      height: 100,
    },
  }));

  const { checked, delayedCount, width, height } = props;
  const classes = useStyles();

  return (
    <Zoom
      in={checked}
      style={{ transitionDelay: checked ? `${delayedCount}ms` : "0ms" }}
    >
      <Paper elevation={0} className={classes.paper}>
        <div
          style={{
            width: width,
            height: height,
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <h1
            style={{
              textAlign: "center",
            }}
            class="text-3xl md:text-4xl font-bold mb-4"
          >
            Open Source
          </h1>

          <div
            style={{
              display: "flex",
              paddingTop: "10px",
            }}
          >
            <div style={{ display: "inline-block", paddingRight: "47px", overflowWrap: "break-word", width: "210px" }}>
              <h4 style={{ margin: "0px" }}>Post It</h4>
              <a
                style={{ margin: "0px", marginTop: "10px" }}
                href="http://morning-sands-10234.herokuapp.com/"
                target="_blank"
                class="link"
                rel="noreferrer"
              >
                http://morning-sands-10234.herokuapp.com/
              </a>
              <p style={{ margin: "0px", marginTop: "10px" }}>
                2022.05~present
              </p>
            </div>
            <ul
              style={{ margin: "0px" }}
              class="text-gray-500 text-sm md:text-base"
            >
              <li>
                <p>
                Worked in a team with two other CSC309 students to produce a React single-page web application serving
                visualizations, of plans during and after the COVID-19 pandemic.
                </p>
              </li>
              <li>
                <p>
                Utilized core React lifecycle functions for the frontend. The backend is an Express.js server running on the
                Node.js engine.
                </p>
              </li>
              <li>
                <p>
                  Use the Google Maps API to enhance the user experience by enabling them to add their stories anywhere
                  on the map.
                </p>
              </li>
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              paddingTop: "10px",
            }}
          >
            <div style={{ display: "inline-block", paddingRight: "47px", overflowWrap: "break-word", width: "210px" }}>
              <h4 style={{ margin: "0px" }}>Pandemic Diary</h4>
              <a
                style={{ margin: "0px", marginTop: "10px" }}
                href="http://morning-sands-10234.herokuapp.com/"
                target="_blank"
                class="link"
                rel="noreferrer"
              >
                http://morning-sands-10234.herokuapp.com/
              </a>
              <p style={{ margin: "0px", marginTop: "10px" }}>
                2020.06~2020.08
              </p>
            </div>
            <ul
              style={{ margin: "0px" }}
              class="text-gray-500 text-sm md:text-base"
            >
              <li>
                <p>
                Worked in a team with two other CSC309 students to produce a React single-page web application serving
                visualizations, of plans during and after the COVID-19 pandemic.
                </p>
              </li>
              <li>
                <p>
                Utilized core React lifecycle functions for the frontend. The backend is an Express.js server running on the
                Node.js engine.
                </p>
              </li>
              <li>
                <p>
                  Use the Google Maps API to enhance the user experience by enabling them to add their stories anywhere
                  on the map.
                </p>
              </li>
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              paddingTop: "10px",
            }}
          >
            <div style={{ display: "inline-block", paddingRight: "47px", overflowWrap: "break-word", width: "210px" }}>
              <h4 style={{ margin: "0px" }}>Anify Library</h4>
              <a
                style={{ margin: "0px", marginTop: "10px" }}
                href="http://fathomless-beyond-49853.herokuapp.com/"
                target="_blank"
                class="link"
                rel="noreferrer"
              >
                http://fathomless-beyond-49853.herokuapp.com/
              </a>
              <p style={{ margin: "0px", marginTop: "10px" }}>
                2020.07~2020.08
              </p>
            </div>
            <ul
              style={{ margin: "0px" }}
              class="text-gray-500 text-sm md:text-base"
            >
              <li>
                <p>
                  Developed a performant HTML5 canvas-based JavaScript
                  libraryanify.jsthat displays various animationswith different
                  themes.
                </p>
              </li>
              <li>
                <p>
                  Deployed a website with examples and documents of the library
                  using Heroku.
                </p>
              </li>
              <li>
                <p>
                  The deployed website also contains a web app that creates
                  profile pictures using animations from Anify.
                </p>
              </li>
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "20px"
            }}
          >
            <div
              style={{
                display: "inline-block",
                paddingTop: "10px",
                overflowWrap: "break-word",
                width: "210px",
              }}
            >
              <h4 style={{ margin: "0px" }}>Unlimited Alien Games</h4>
              <a
                style={{ margin: "0px", marginTop: "10px" }}
                href="https://github.com/woojinpark43/Unlimited-Alien-Games"
                target="_blank"
                class="link"
                rel="noreferrer"
              >
                https://github.com/woojinpark43/Unlimited-Alien-Games
              </a>
              <p style={{ margin: "0px", marginTop: "10px" }}>
                September-December 2019
              </p>
            </div>
            <ul
              style={{ margin: "0px" }}
              class="text-gray-500 text-sm md:text-base"
            >
              <li>
                <p>
                  Designed and developed an Android game in Java using the model
                  view presenter design pattern.
                </p>
              </li>
              <li>
                <p>
                  A mobile game comprised of three levels, made in Android
                  Studio using Java from scratch.
                </p>
              </li>
              <li>
                <p>
                  Maintained a clean and highly extensible design by adhering to
                  the SOLID principles of programming.
                </p>
              </li>
              <li>
                <p>
                  The game is made in a group of five, where git is used for a
                  more coordinated work
                </p>
              </li>
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "20px"
            }}
          >
            <div
              style={{
                display: "inline-block",
                paddingTop: "10px",
                overflowWrap: "break-word",
                width: "210px",
              }}
            >
              <h4 style={{ margin: "0px" }}>Tank Warrior</h4>
              <a
                style={{ margin: "0px", marginTop: "10px" }}
                href="https://github.com/woojinpark43/Tank_Warrior"
                target="_blank"
                class="link"
                rel="noreferrer"
              >
                https://github.com/woojinpark43/Tank_Warrior
              </a>
              <p style={{ margin: "0px", marginTop: "10px" }}>
                August 2019
              </p>
            </div>
            <ul
              style={{ margin: "0px" }}
              class="text-gray-500 text-sm md:text-base"
            >
              <li>
                <p>
                A 2-player tank shooting game on a 2-D map with sound effects to enhance the user experience.
                </p>
              </li>
              <li>
                <p>
                An object oriented program using python 3 from scratch.
                </p>
              </li>
              <li>
                <p>
                  Use the Pygame library to develop the game screen and run wav files for sound effects.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Paper>
    </Zoom>
  );
};

OpenSourceZoomPanel.defaultProps = {
  checked: false,
  delayedCount: "500ms",
  content: "",
  width: "103px",
  heigth: "300px",
};

export default OpenSourceZoomPanel;