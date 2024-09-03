import ReactPlayer from "react-player";

import "./video-player.scss";

interface VideoPlayerProps{
    source: string;

}

const VideoPlayer = ({ source }:VideoPlayerProps)=>{
    const sourceParsed = `/projects/${source}`;
    return (
        <div className="video-player">
            <ReactPlayer className="react-player"  style={{}} width={"100%"}  height={"100%"} url={sourceParsed} playing loop/>
        </div>
    );
};

export default VideoPlayer;