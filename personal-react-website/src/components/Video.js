import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import "../../node_modules/video-react/dist/video-react.css";
import video from '../data/video/Typing_dark_04_Videvo.mov'

const Video = (props) => {

    const { width, height, loop, controls, url, muted, playing, className } = props;

    return (
        <>
            {playing
                ?   <ReactPlayer
                        url={url}
                        width={width}
                        height={height}
                        playing
                        loop={loop}
                        muted={muted}
                        controls={controls}
                        playsinline={true}
                        className={className}
                    />
                :   <ReactPlayer
                        url={url}
                        width={width}
                        height={height}
                        loop={loop}
                        muted={muted}
                        controls={controls}
                        playsinline={true}
                        className={className}
                    />
            }
        </>
    );
}

// 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'

Video.defaultProps = {
    width: '100%',
    height: '100%',
    loop: true,
    controls: true,
    url: video,
    muted: false,
    playing: false,
    className: '',
};

export default Video;