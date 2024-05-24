"use client"
import Link from "next/link"
import React, { useState, useEffect, useRef } from 'react';
import SearchComponent from "./searchComponent";

export default function NavigationMenu(){

    const [showNavBar, setShowNavBar] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const menuRef = useRef(null);
    const itemRef = useRef(null);

    const toggleMenu = () => {
        setShowNavBar((prev) => !prev);
    };

    const toggleSearch = () => {
        setShowSearch((prev) => !prev);
    };

    useEffect(() => {
        showNavBar
          ? (document.body.style.overflow = 'hidden')
          : (document.body.style.overflow = 'auto');
      }, [showNavBar]);
      
    const handleOutsideClick = (e) => {
        if (menuRef.current?.contains(e.target)) {
            setShowNavBar((prev) => !prev);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
    }, []);
    
    

    return (
        
        <>
            <button 
                className="nav-click block"
                onClick={toggleMenu}
            >
                <div className="active-nav">
                    <span className="line-toggle toggle-1"></span> 
                    <span className="line-toggle toggle-2"></span>
                </div>
            </button>
            
            <div 
                className={`navigation${showNavBar ? ' show opacity-1' : ''}`}
            >
                <span ref={menuRef}></span>
                <button 
                    className={`close-menu${showNavBar ? ' show opacity-1' : ''}`}
                    onClick={toggleMenu}
                >
                    <span className="line-toggle toggle-1"></span> 
                    <span className="line-toggle toggle-2"></span>
                </button>
                <nav className={`main-menu${showNavBar ? ' show opacity-1' : ''}`}>
                    <ul>
                        <li className="nav-item nav-item-home current">
                            <Link className="link-home link-load nav-item-a" href={`/`} prefetch={null}>
                                <svg x="0px" y="0px" viewBox="0 0 50 36">
                                    <path fill="currentColor" d="M25,0 15.017,10 15.017,6 7.031,6 7.031,18 0,25.043 1.412,26.457 25,2.828 48.588,26.457 50,25.043z"></path>
                                    <path fill="currentColor" d="M7.031,26 7,36 42.896,36 42.896,26 25,8z"></path>
                                </svg>
                            </Link>
                        </li>
                        <li className="nav-item"><Link className={`link-load nav-item-a${showNavBar ? ' animation-menu' : ' animation-menu-showup'}`} href={`/product`} onClick={toggleMenu} prefetch={null}>Sản phẩm</Link></li>
                        <li className="nav-item"><Link className={`link-load nav-item-a${showNavBar ? ' animation-menu' : ' animation-menu-showup'}`} href={`/news`} onClick={toggleMenu} prefetch={null}>Tin tức</Link></li>
                        <li className="nav-item"><Link className={`link-load nav-item-a${showNavBar ? ' animation-menu' : ' animation-menu-showup'}`} href={`/about`} onClick={toggleMenu} prefetch={null}>Giới thiệu</Link></li>
                        <li className="nav-item small-nav-item first-small"><Link className={`link-load nav-item-a${showNavBar ? ' animation-menu' : ' animation-menu-showup'}`} href={`/contact`} onClick={toggleMenu} prefetch={null}>Liên hệ</Link></li>
                    </ul>
                </nav>
                <div className={`overlay-menu${showNavBar ? ' show opacity-1' : ''}`}></div>
                <div 
                    className={`right-header right-header-clone${showNavBar ? ' animation-menu' : ' animation-menu-showdown'}`}
                >
                    <Link className="hotline-contacts link-load" href={`/contact`} prefetch={null}>
                        <svg 
                        className={
                            "h-[32px] w-[32px] max-[1100px]:h-[26px] max-[1100px]:w-[26px] mr-[10px]"
                        }  
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> 
                            <path d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> 
                            <path d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> 
                        </g>
                    </svg>
                    </Link>
                    <Link className="email-but" href={`/`}>
                        <svg className={
                            "h-[32px] w-[32px] max-[1100px]:h-[26px] max-[1100px]:w-[26px]"
                        }
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> 
                            <title></title> 
                                <g id="Complete"> 
                                    <g id="mail"> 
                                        <g> 
                                        <polyline fill="none" points="4 8.2 12 14.1 20 8.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> 
                                        <rect fill="none" height="14" rx="2" ry="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="6.5"></rect> 
                                        </g> 
                                    </g> 
                                </g> 
                            </g>
                        </svg>
                    </Link>
                    {/* <div className="language hidden">
                        <span>EN</span>
                    </div> */}
                    <div className="search-top">
                        <button className="search-but" aria-label="search">
                            <svg className={
                                "h-[32px] w-[32px] max-[1100px]:h-[26px] max-[1100px]:w-[26px]"
                            }  
                            viewBox="0 0 24.00 24.00" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            stroke="currentColor" 
                            transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> 
                                    <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="right-header right-header-main flex">
                <Link className="hotline-contacts link-load" href={`/contact`}>
                    <svg 
                        className={
                            "h-[32px] w-[32px] max-[1100px]:h-[26px] max-[1100px]:w-[26px] mr-[10px]"
                        }  
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> 
                            <path d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> 
                            <path d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> 
                        </g>
                    </svg>
                    <span>Contact</span>    
                </Link>
                <Link className="email-but" href={`/`}>
                    <svg className={
                        "h-[32px] w-[32px] max-[1100px]:h-[26px] max-[1100px]:w-[26px]"
                    }
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                        <title></title> 
                            <g id="Complete"> 
                                <g id="mail"> 
                                    <g> 
                                    <polyline fill="none" points="4 8.2 12 14.1 20 8.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> 
                                    <rect fill="none" height="14" rx="2" ry="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="6.5"></rect> 
                                    </g> 
                                </g> 
                            </g> 
                        </g>
                    </svg>
                </Link>
                {/* <div className="language hidden">
                    <span>EN</span>
                </div> */}
                <div className="search-top">
                    <button 
                        className="search-but" 
                        aria-label="search"
                        onClick={toggleSearch}
                    >
                    <svg className={
                        "h-[32px] w-[32px] max-[1100px]:h-[26px] max-[1100px]:w-[26px]"
                    }  
                    viewBox="0 0 24.00 24.00" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    stroke="currentColor" 
                    transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                        </g>
                    </svg>
                    </button>
                </div>
            </div>
            <SearchComponent show={showSearch} display={toggleSearch} />
        </>
        
    )
}