import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import "./video-player.scss";

import { useInView } from "react-intersection-observer";

interface VideoPlayerProps{
    source: string;
    loop?:boolean;
    onChangeIsPlaying?: (isPlaying:boolean)=>void;
    waitForInView?:boolean
}

const VideoPlayer = ({ source, loop=true,  onChangeIsPlaying, waitForInView=false }:VideoPlayerProps)=>{

    const isPlayingDefault = waitForInView ? false : true;
    const [isPlaying,setIsPlaying] = useState(isPlayingDefault);
    const [inViewRef, inView] = useInView();
    
    useEffect(() => {
        if (waitForInView && inView){
            setIsPlaying(true);
        }
    }, [inView, waitForInView]);

    const handleOnVideoEnd = ()=>{
        if (onChangeIsPlaying){
            onChangeIsPlaying(false);
        }
    };

    return (
        <div className="video-player" ref={inViewRef} >
            <ReactPlayer className="react-player__tablet"
                width="100%"
                height="100%"
                url={source}
                playing={isPlaying}
                loop={loop}
                muted
                onEnded={handleOnVideoEnd}
            />
            <ReactPlayer className="react-player__mobile"
                width="100%"
                height="100%"
                url={source}
                controls={true}
            />
        </div>
    );
};

export default VideoPlayer;