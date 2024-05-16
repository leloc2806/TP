"use client";
import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import NavigationMenu from './navbar/navigation';
import Image from 'next/image';
import Link from 'next/link';

async function fetchLogo() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/header-logo?populate=deep,2`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export default function Header() {
  const { scrollYProgress } = useScroll();
  const [isShrunk, setIsShrunk] = useState(false);

  const { data: logos, error } = useQuery({
    queryKey: ["logos"],
    queryFn: fetchLogo,
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.01) {
      setIsShrunk(true);
    } else {
      setIsShrunk(false);
    }
  });

  if (error) return <div>Error loading logo</div>;

  const logoWhite = logos?.data?.attributes?.logoWhite?.data?.attributes?.url || `${process.env.NEXT_PUBLIC_API_URL}/uploads/9d5d7ff943cfe291bbde_26c0fd2efe.png`;
  const logoBlack = logos?.data?.attributes?.logoBlack?.data?.attributes?.url || `${process.env.NEXT_PUBLIC_API_URL}/uploads/logo_tp_2_083bc0adf9.png`;

  return (
    <motion.header
      className={`header show bg-slate-300 ${isShrunk ? 'hide' : ''}`}
      transition={{ type: 'spring', stiffness: 150, damping: 20 }}
    >
      <Link href={`/`} className="logo absolute">
        <Image className={`logo-white`} src={logoWhite} alt={"logo"} width={500} height={500} />
        <Image className={`logo-black`} src={logoBlack} alt={"logo"} width={500} height={500} />
      </Link>
      
      <NavigationMenu />
      <script dangerouslySetInnerHTML={{ __html: `history.scrollRestoration = "manual"` }} />
    </motion.header>
  );
}
