import React from "react";
import Paper from "@material-ui/core/Paper";
import Zoom from "@material-ui/core/Zoom";
import { Image } from "../elements";
import handleViewport from "react-in-viewport";
import { makeStyles } from "@material-ui/core/styles";

const ZoomIcon = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: 180,
    },
    container: {
      display: "flex",
    },
    paper: {
      margin: "5px",
    },
    svg: {
      width: 100,
      height: 100,
    },
  }));

  const { checked, delayedCount, size, data } = props;
  const classes = useStyles();

  return (
    <Zoom
      in={checked}
      style={{
        transitionDelay: checked ? `${delayedCount}ms` : "0ms",
        width: "62.5px",
        height: " 62.5px",
      }}
    >
      <Paper className={classes.paper}>
        <div
          style={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Image shape="circle" src={data[0]} size={size} />
        </div>
      </Paper>
    </Zoom>
  );
};

ZoomIcon.defaultProps = {
  checked: false,
  delayedCount: "500ms",
  data: ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg", ""],
  size: "300px",
};

const data = [
  ["https://img.icons8.com/color/48/000000/linkedin.png", ""],
  ["https://img.icons8.com/ios-filled/50/000000/github.png", ""],
  ["https://img.icons8.com/ios-filled/50/000000/personal-trainer.png", ""],
];

const ViewportZoomMainPageIcon = (props) => {
  const [checked, setChecked] = React.useState(false);
  const { width, initDelayCount } = props;
  const IconZoom = (props) => {
    const { forwardedRef } = props;
    let delayedCount = initDelayCount;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "95px",
        }}
        className="viewport-block"
        ref={forwardedRef}
      >
        {data.map((c) => {
          delayedCount += 300;
          return (
            <ZoomIcon
              checked={checked}
              data={c}
              delayedCount={delayedCount}
              size={width}
            />
          );
        })}
      </div>
    );
  };

  const ViewportZoom = handleViewport(IconZoom);

  return (
    <div style={{ width: "100%", justifyContent: "center" }}>
      <ViewportZoom onEnterViewport={() => setChecked(true)} />
    </div>
  );
};

export default ViewportZoomMainPageIcon;
