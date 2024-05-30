"use client"
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';


export default function MotionHeader({children, className}) {
  const { scrollYProgress } = useScroll();
  const [isShrunk, setIsShrunk] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // When the scroll progress is more than a certain amount, set isShrunk to true
    if (latest > 0.01) { // Adjust this threshold based on your needs
      setIsShrunk(true);
    } else {
      setIsShrunk(false);
    }
  });


  return (
    <motion.header
      className={`${className} ${isShrunk ? 'hide' : ''}`}
      transition={{ type: 'spring', stiffness: 150, damping: 20 }}
    >
      
      {children}
      
     
      <script dangerouslySetInnerHTML={{ __html: `history.scrollRestoration = "manual"` }} />
    </motion.header>
  );
}
