"use client"
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import NavigationMenu from './navbar/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function SideHeader() {
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
      className={`header black show ${isShrunk ? 'hide' : ''}`}
      transition={{ type: 'spring', stiffness: 150, damping: 20 }}

    >
      <Link href={`/`} className="logo absolute">
        <Image className={`logo-black`} src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/logo_tp_2_083bc0adf9.png`} alt={"logo"} width={400} height={400}/>
      </Link>
      
      <NavigationMenu/>
      <script dangerouslySetInnerHTML={{ __html: `history.scrollRestoration = "manual"` }} />
    </motion.header>
  );
}
