import React from "react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Zoom from "@material-ui/core/Zoom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Image, Text } from "../elements";
import { makeStyles } from "@material-ui/core/styles";

const ExperienceZoomPanel = (props) => {
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
            Experience
          </h1>
          <div
            style={{
              display: "flex",
            }}
          >
            <div style={{ display: "inline-block", paddingRight: "25px" }}>
              <h3 style={{ margin: "0px" }}>
                Informatica Software, Limited - Main Division
              </h3>
              <div style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}>
              <Image src="https://img.icons8.com/color/48/00000/internet.png" size="20" shape="circle"/>
              <a
                href="https://www.informatica.com/"
                target="_blank"
                class="link"
                rel="noreferrer"
              >
                Informatica Website
              </a>
              </div>
              <p style={{ margin: "0px", marginTop: "10px" }}>
                <b>Software Engineering Intern</b>
              </p>
              <p style={{ margin: "0px", marginTop: "10px" }}>
                2021.05~2022.04
              </p>
            </div>
            <ul
              style={{ margin: "0px" }}
              class="text-gray-500 text-sm md:text-base"
            >
              <li>
                <p>
                  Worked on MDM.Next product, which involves implementation of new features, enhancements and bugs.
                </p>
              </li>
              <li>
                <p>Mainly worked on UI features of MDM using React while actively collaborating with cross-functional teams for successful project delivery</p>
              </li>
              <li>
                <p>
                Wrote clean and maintainable product code with Automation tests (CodeceptJS) and unit tests (Jest)
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Paper>
    </Zoom>
  );
};

ExperienceZoomPanel.defaultProps = {
  checked: false,
  delayedCount: "500ms",
  content: "",
  width: "103px",
  heigth: "300px",
};

export default ExperienceZoomPanel;
