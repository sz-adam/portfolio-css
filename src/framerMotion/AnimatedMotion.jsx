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
    skillAnimation: {
      initial:"hidden",
      whileInView:"visible",
      viewport:{ once: true, amount: 1.8 },
      transition:{ duration: 1 },
      variants:{
        hidden: { opacity: 0,y: -150 },
        visible: { opacity: 1, y: 0 },
      }
    },
    skillItemHomeImageAnimation:{
      whileHover:{
         scale: 1.05 
        },
        transition: {
          duration: 1, 
        },
    }
}

const AnimatedMotion = ({ animationName, children }) => {  
    const animation = animations[animationName];
  
    return (
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={animation.transition}
        variants={animation.variants}
        whileInView={animation.whileInView}
        whileHover={animation.whileHover}
      >
        {children}
      </motion.div>
    );
  };
  
  export default AnimatedMotion;