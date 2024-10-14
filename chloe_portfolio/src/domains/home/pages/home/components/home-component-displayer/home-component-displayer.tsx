import { motion } from "framer-motion";

import { firstAnimationDuration, secondAnimationDuration } from "../../animation-config";

interface HomeComponentDisplayerProps{
  children:React.ReactElement
  className?:string
}

const HomeComponentDisplayer = ({ children,className }:HomeComponentDisplayerProps)=>{


    return (
        <motion.div
            className={className}
            initial={{ display:"none", opacity:0 }}
            animate={{ display:"flex" ,opacity:1 }}
            transition={{ delay: firstAnimationDuration + secondAnimationDuration / 2 }}
        >
            {children}
        </motion.div>
    );
};

export default HomeComponentDisplayer;