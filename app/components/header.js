"use client"
import { useState} from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import NavigationMenu from './navbar/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
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
      className={`header show bg-slate-300 ${isShrunk ? 'hide' : ''}`}
      transition={{ type: 'spring', stiffness: 150, damping: 20 }}

    >
      <Link href={`/`} className="logo absolute">
        <Image className={`logo-white`} src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/9d5d7ff943cfe291bbde_26c0fd2efe.png`} alt={"logo"} width={500} height={500}/>
        <Image className={`logo-black`} src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/logo_tp_2_083bc0adf9.png`} alt={"logo"} width={500} height={500}/>
      </Link>
      
      <NavigationMenu/>
      <script dangerouslySetInnerHTML={{ __html: `history.scrollRestoration = "manual"` }} />
    </motion.header>
  );
}
