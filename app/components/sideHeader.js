"use client"
import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import NavigationMenu from './navigation';

export default function SideHeader() {
  const { scrollYProgress } = useScroll();
  const [isShrunk, setIsShrunk] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // When the scroll progress is more than a certain amount, set isShrunk to true
    if (latest > 0.1) { // Adjust this threshold based on your needs
      setIsShrunk(true);
    } else {
      setIsShrunk(false);
    }
  });

  return (
    <motion.header
      className={`header black ${isShrunk ? 'hide' : ''}`}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}

    >
      <div className="logo absolute">
        <h2>Logo</h2>
      </div>
      
      <NavigationMenu/>
      <script dangerouslySetInnerHTML={{ __html: `history.scrollRestoration = "manual"` }} />
    </motion.header>
  );
}
