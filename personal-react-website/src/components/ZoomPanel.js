import React from "react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Zoom from "@material-ui/core/Zoom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Image, Text } from '../elements'
import { makeStyles } from "@material-ui/core/styles";

const ZoomPanel=(props) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      height: 180
    },
    container: {
      display: "flex"
    },
    paper: {
      margin: theme.spacing(2)
    },
    svg: {
      width: 100,
      height: 100
    },
  }));

  const { checked, delayedCount, content, width, height } = props;
  const classes = useStyles();

  return (
    <Zoom
      in={checked}
      style={{ transitionDelay: checked ? `${delayedCount}ms` : "0ms" }}
    >
      <Paper elevation={4} className={classes.paper}>
        <div style={{ width: width, height: height, alignItems:'center', textAlign: 'center' }}>
          <Image/>
          <Text> example text </Text>
          <hr/>
          <Text>
            {content}
          </Text>
        </div>
      </Paper>
    </Zoom>
  );
}

ZoomPanel.defaultProps = {
  checked: false,
  delayedCount: '500ms',
  content: '',
  width: '103px',
  heigth: '300px'
};

export default ZoomPanel;