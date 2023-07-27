import React from 'react';
import { motion } from 'framer-motion';

const animations ={
    homeTextAnimation:{
        initial:{ opacity: 0, x: -150 },
        animate:{ opacity: 1, x: 0 },
        exit:{pacity: 0, y: -50 },
        transition:{ duration: 1 },


        
    },
    homeImageAnimation: {
        initial:{ opacity: 0, x: 150 },
        animate:{ opacity: 1, x: 0 },
        exit:{pacity: 0, y: -50 },
        transition:{ duration: 1 },
    },
   
}

const AnimatedMotion = ({ animationName, children }) => {  
    const animation = animations[animationName];
  
    return (
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={animation.transition}
    
      >
        {children}
      </motion.div>
    );
  };
  
  export default AnimatedMotion;