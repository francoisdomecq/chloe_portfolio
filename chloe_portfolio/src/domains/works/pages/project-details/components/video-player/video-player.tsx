import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";

import { motion } from "framer-motion";

import "./video-player.scss";


interface VideoPlayerProps{
    source: string;
    loop?:boolean;
    onChangeIsPlaying?: (isPlaying:boolean)=>void;
    waitForInView?:boolean;
}

const VideoPlayer = ({ source, loop=true,  onChangeIsPlaying, waitForInView=true }:VideoPlayerProps)=>{
    const [isPlaying,setIsPlaying] = useState(!waitForInView);
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
        <motion.div className="video-player" ref={inViewRef}>
            <ReactPlayer className="react-player__tablet"
                width="90%"
                height="90%"
                url={source}
                playing={isPlaying}
                loop={loop}
                muted
                controls
                onEnded={handleOnVideoEnd}
            />
            <ReactPlayer className="react-player__mobile"
                width="100%"
                height="100%"
                url={source}
                controls={true}
                onEnded={handleOnVideoEnd}
            />
        </motion.div>
    );
};

export default VideoPlayer;