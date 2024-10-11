import ReactPlayer from "react-player";

import "./video-player.scss";

interface VideoPlayerProps{
    source: string;
    loop?:boolean;
    onChangeIsPlaying?: (isPlaying:boolean)=>void;
}

const VideoPlayer = ({ source, loop=true,  onChangeIsPlaying }:VideoPlayerProps)=>{
    const sourceParsed = `${source}`;

    const handleOnVideoEnd = ()=>{
        if (onChangeIsPlaying){
            onChangeIsPlaying(false);
        }
    };

    return (
        <div className="video-player">
            <ReactPlayer className="react-player__tablet"
                width="100%"
                height="100%"
                url={sourceParsed}
                playing
                loop={loop}
                muted
                onEnded={handleOnVideoEnd}
            />
            <ReactPlayer className="react-player__mobile"
                width="100%"
                height="100%"
                url={sourceParsed}
                controls={true}
            />
        </div>
    );
};

export default VideoPlayer;