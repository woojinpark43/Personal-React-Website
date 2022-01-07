import React from "react";
import { IntroduceZoomPanel } from "./index";
import handleViewport from "react-in-viewport";

const ViewportZoomPanel = (props) => {
  const { content, width, height, initDelayCount, type } = props;

  const [checked, setChecked] = React.useState(false);

  const Zoom = (props) => {
    const { inViewport, forwardedRef } = props;
    let delayedCount = initDelayCount;
    // const color = inViewport ? '#217ac0' : '#ff9800';
    // const text = inViewport ? 'In viewport' : 'Not in viewport';
    return (
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="viewport-block"
        ref={forwardedRef}
      >
        <IntroduceZoomPanel
          checked={checked}
          delayedCount={delayedCount}
          width={width}
          height={height}
        />
      </div>
    );
  };

  const ViewportZoom = handleViewport(Zoom);

  return (
    <div style={{ width: "100%", justifyContent: "center" }}>
      {/* onLeaveViewport={() => setChecked(false)} */}
      <ViewportZoom onEnterViewport={() => setChecked(true)} />
    </div>
  );
};

export default ViewportZoomPanel;
