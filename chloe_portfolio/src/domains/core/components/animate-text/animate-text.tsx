import { motion } from "framer-motion";

import "./animate-text.scss";

interface AnimateTextProps {
  text: string;
  delay?: number;
}

const AnimateText = ({ text, delay }: AnimateTextProps) => {
    const formattedText = text.split("");
    return (
        <div className="animate-text">
            {formattedText.map((element, index) => (
                <motion.div
                    className="animate-text__letter"
                    initial={{ opacity: 0,y :20 }}
                    animate={{ opacity: 1 ,y :0 }}
                    transition={{
                        duration: 0.25,
                        delay: delay + index / 10
                    }}
                    key={index}
                >
                    {element === " " ? <p>   </p> : element}
                </motion.div>
            ))}
        </div>
    );
};

export default AnimateText;