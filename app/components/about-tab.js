"use client"

import Link from "next/link";
import { useState } from "react";

const OurStory = ({props}) => {
    <div className="our-mission flex w-[80vw] mx-auto font-normal py-[5vw] relative">    
        <div className="left-content text-[4vw] font-extralight w-2/5 pr-6">
            <h2>{props.title}</h2>
        </div>
        <div className="right-content w-3/5">
            <div>
                <h3 className="font-bold text-xl mb-10">Harmonizing People – Land – Community</h3>
                <p className="text-xl opacity-60">
                    {props.content}
                </p>
            </div>
        </div>
        <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-black"></span>
    </div>
}

const Award = ({props}) => {
    <div key={index} className="our-mission flex w-[80vw] mx-auto font-normal py-[5vw] relative">    
        <div className="left-content text-[4vw] font-extralight w-2/5 pr-6">
            <h2>{tab.title}</h2>
        </div>
        <div className="right-content w-3/5">
            <div>
                <h3 className="font-bold text-xl mb-10">Harmonizing People – Land – Community</h3>
                <p className="text-xl opacity-60">
                    {tab.content}
                </p>
            </div>
        </div>
        <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-black"></span>
    </div>
}

const Milestone = ({props}) => {
    <div key={index} className="our-mission flex w-[80vw] mx-auto font-normal py-[5vw] relative">    
        <div className="left-content text-[4vw] font-extralight w-2/5 pr-6">
            <h2>{tab.title}</h2>
        </div>
        <div className="right-content w-3/5">
            <div>
                <h3 className="font-bold text-xl mb-10">Harmonizing People – Land – Community</h3>
                <p className="text-xl opacity-60">
                    {tab.content}
                </p>
            </div>
        </div>
        <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-black"></span>
    </div>
}

const OurPartner = () => {}

const JoinUs = () => {}

const AboutTab = ({tabs}) => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="section-outernav">
            <div className="outer-nav w-[80vw] mx-auto font-normal text-xl">
                <div className="sub-nav">
                    <div className="flex">                           
                        {tabs.map((tab, index) => 
                            (<button key={index} 
                                className={`opacity-60 hover:opacity-100 ${activeTab === index 
                                    ? "active:opacity-100 visited:opacity-100 focus:opacity-100" 
                                    : ""} ${index === 0 ? 'first:ml-0 my-11 mr-9' : 'my-11 mx-9'}`}     
                                    onClick={() => handleTabClick(index)}
                            >                         
                                {tab.title}
                            </button>)
                        )}
                    </div>
                </div> 
            </div>
            <div className="about-content">
                {tabs.map((tab, index) =>
                    activeTab === index ? 
                        <OurStory key={index} props={tab}/>
                    : null
                )}
            </div>
        </div>
    )
}



export default AboutTab     