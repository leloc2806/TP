"use client"
import Link from "next/link"
import Image from "next/image"
import React, { useState } from 'react';

export default function NavigationMenu(){

    const [showNavBar, setShowNabBar] = useState(false);

    const toggleMenu = () => {
        setShowNabBar(!showNavBar);
      };

    return (
        <>
            <button 
                className="nav-click block"
                onClick={() => setShowNabBar((prev) => !prev)}
            >
                <div className="active-nav">
                    <span className="line-toggle toggle-1"></span> 
                    <span className="line-toggle toggle-2"></span>
                </div>
            </button>

            <div 
                className={`navigation${showNavBar ? ' show opacity-1' : ' opacity-0'}`} 
            >
                <span></span>
                <button 
                className={`close-menu${showNavBar ? ' show opacity-1' : ' opacity-0'}`}
                onClick={toggleMenu} >
                    <span className="line-toggle toggle-1"></span> 
                    <span className="line-toggle toggle-2"></span>
                </button>
                <nav className={`main-menu${showNavBar ? ' show opacity-1' : ' opacity-0'}`}>
                    <ul>
                        <li className="nav-item nav-item-home current">
                            <Link className="link-home link-load nav-item-a" href="https://www.nhojsc.vn/" data-name="home-page" aria-label="nav">
                                <svg x="0px" y="0px" viewBox="0 0 50 36">
                                    <path fill="currentColor" d="M25,0 15.017,10 15.017,6 7.031,6 7.031,18 0,25.043 1.412,26.457 25,2.828 48.588,26.457 50,25.043z"></path>
                                    <path fill="currentColor" d="M7.031,26 7,36 42.896,36 42.896,26 25,8z"></path>
                                </svg>
                            </Link>
                        </li>
                        <li className="nav-item"><Link className={`link-load nav-item-a${showNavBar ? ' animation-menu' : ' animation-menu-showup'}`} href="https://www.nhojsc.vn/du-an.html" data-name="project-page" aria-label="nav">Dự án</Link></li>
                        <li className="nav-item"><Link className={`link-load nav-item-a${showNavBar ? ' animation-menu' : ' animation-menu-showup'}`} href="https://www.nhojsc.vn/tin-tuc.html" data-name="news-page" aria-label="nav">Tin tức</Link></li>
                        <li className="nav-item"><Link className={`link-load nav-item-a${showNavBar ? ' animation-menu' : ' animation-menu-showup'}`} href="https://www.nhojsc.vn/gioi-thieu.html" data-name="about-page" aria-label="nav">Giới thiệu</Link></li>
                        <li className="nav-item"><Link className={`link-load nav-item-a${showNavBar ? ' animation-menu' : ' animation-menu-showup'}`} href="https://www.nhojsc.vn/n-h-o-cares.html" data-name="care-page" aria-label="nav">N.H.O cares</Link></li>
                        <li className="nav-item small-nav-item first-small"><Link className={`link-load nav-item-a${showNavBar ? ' animation-menu' : ' animation-menu-showup'}`} href="https://www.nhojsc.vn/lien-he.html" data-name="contact-page" aria-label="nav">Liên hệ</Link></li>
                    </ul>
                </nav>
                <div className={`overlay-menu${showNavBar ? ' show opacity-1' : ' opacity-0'}`}></div>
                <div 
                    className={`right-header right-header-clone${showNavBar ? ' animation-menu' : ' animation-menu-showdown'}`}
                >
                    <Link className="hotline-contacts link-load" href={`/`}>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/call_svgrepo_com_0896300b0f.svg`}
                            alt={"logo"}
                            className={"w-auto"}
                            width={0}
                            height={0}

                        />
                    </Link>
                    <Link className="email-but" href={`/`}>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/mail_svgrepo_com_e1143eaf2c.svg`}
                            alt={"logo"}
                            className={"w-auto"}
                            width={0}
                            height={0}
                        />
                    </Link>
                    <div className="language">
                        <span>EN</span>
                    </div>
                    <div className="search-top">
                        <button className="search-but" aria-label="search">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/search_svgrepo_com_1b82fc5e53.svg`}
                                alt={"logo"}
                                className={"w-auto"}
                                width={0}
                                height={0}
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div className="right-header right-header-main flex">
                <Link className="hotline-contacts link-load" href={`/`}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/call_svgrepo_com_0896300b0f.svg`}
                        alt={"logo"}
                        className={"w-auto"}
                        width={0}
                        height={0}

                    />
                    <span>Contact</span>    
                </Link>
                <Link className="email-but" href={`/`}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/mail_svgrepo_com_e1143eaf2c.svg`}
                        alt={"logo"}
                        className={"w-auto"}
                        width={0}
                        height={0}
                    />
                </Link>
                <div className="language">
                    <span>EN</span>
                </div>
                <div className="search-top">
                    <button className="search-but" aria-label="search">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/search_svgrepo_com_1b82fc5e53.svg`}
                            alt={"logo"}
                            className={"w-auto"}
                            width={0}
                            height={0}
                        />
                    </button>
                </div>
            </div>
        </>
        
    )
}