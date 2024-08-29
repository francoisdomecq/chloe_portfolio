import ReactPlayer from "react-player";

interface VideoPlayerProps{
    source: string;

}

const VideoPlayer = ({ source }:VideoPlayerProps)=>{
    const sourceParsed = `/projects/${source}`;
    return (
        <div>
            <ReactPlayer url={sourceParsed} playing loop />
        </div>
    );
};

export default VideoPlayer;