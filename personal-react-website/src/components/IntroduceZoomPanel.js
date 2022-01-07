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
            I'm a Software Developer with Data Skills. I have mainly worked as a
            Tech Lead at Startups 🚀 Now I'm working as Web Frontend Lead at
            Healingpaper that serves Gangnamunni.
          </p>
        </div>
      </Paper>
    </Zoom>
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
