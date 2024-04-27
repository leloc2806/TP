"use client"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export default function SectionComponent({ children, className, translate}){

    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1});



    return(
        <section 
            className={className}
            ref={ref}
            style={{
                transform: isInView ? "none" : translate,
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
        >
            {children}
        </section>
    )
}