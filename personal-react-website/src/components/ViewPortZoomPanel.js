import React from "react";
import { ZoomPanel } from './index';
import handleViewport from 'react-in-viewport';

const ViewportZoomPanel = (props) => {
    const { content, width, height } = props;

    const [checked, setChecked] = React.useState(false);

    const Zoom = (props) => {
        const { inViewport, forwardedRef } = props;
        let delayedCount = 0;
        // const color = inViewport ? '#217ac0' : '#ff9800';
        // const text = inViewport ? 'In viewport' : 'Not in viewport';
        return (
            <div style={{ display: "flex", justifyContent: 'center' }} className="viewport-block" ref={forwardedRef}>
                {content.map((c) => {
                    delayedCount += 500;
                    return <ZoomPanel checked={checked} content={c} delayedCount={delayedCount} width={width} height={height}/>
                })}
            </div>
        );
    };
    
    const ViewportZoom = handleViewport(Zoom, );

    return(
        <div style={{ width: '100%', justifyContent: 'center' }}>
            {/* onLeaveViewport={() => setChecked(false)} */}
            <ViewportZoom onEnterViewport={() => setChecked(true)} />
        </div>
    );
}

export default ViewportZoomPanel