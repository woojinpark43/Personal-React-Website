import React from "react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Zoom from "@material-ui/core/Zoom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Image, Text } from "../elements";
import { makeStyles } from "@material-ui/core/styles";

const IntroduceZoomPanel = (props) => {
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
    <div>
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
            textAlign: "center",
          }}
        >
          <h1 class="text-3xl md:text-4xl font-bold mb-4"> Hi I am Woojin </h1>
          <p class="text-gray-500 text-sm md:text-base">
          I am a dedicated Software Developer who is passionate about coding. Throughout my internship at Informatica, 
            a software development company, I specialized in Frontend development and gained valuable 
            experience working with technologies like React, NodeJS, Docker, and more. 🚀 
            Having recently graduated with a specialist degree in Computer Science from the University of Toronto,
            I am now eager to take my career to the next level and further expand my programming skills.
            My passion lies in Backend development, particularly using the Java Spring framework.
            To prepare for this transition, I've undertaken several personal projects to gain hands-on
            experience in this field.

            My goal is to continue my journey in software development, contributing to innovative
             projects and becoming a well-rounded developer capable of delivering end-to-end solutions. 😆
          </p>
        </div>
      </Paper>
    </Zoom>
    </div>
  );
};

IntroduceZoomPanel.defaultProps = {
  checked: false,
  delayedCount: "500ms",
  content: "",
  width: "103px",
  heigth: "300px",
};

export default IntroduceZoomPanel;
