"use client";

import { Tab } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { Fragment } from 'react'


function OurStory({data}){
   
    const ourStoryTitleLeft1 = data.TitleLeft1;
    const ourStoryTitleLeft2 = data.TitleLeft2;
    const ourStoryUpperTitle3 = data.UpperTitle3;
    const ourStoryRightContent1 = data.RightContent1;
    const ourStoryRightContent2 = data.RightContent2;
    const ourStoryBottomContent3 = data.BottomContent3;

    return(
        <div className="about-content">
            <div className="our-mission flex w-[80vw] mx-auto font-normal py-[5vw] relative">    
                <div className="left-content text-[4vw] font-extralight w-2/5 pr-6">
                    <span className='text-7xl'>{ourStoryTitleLeft1}</span>
                </div>
                <div className="right-content w-3/5">
                    <Markdown>{ourStoryRightContent1}</Markdown>
                </div>
                <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>
        
            </div>
            <div className="our-philosophy flex w-[80vw] mx-auto font-normal py-[5vw] relative">
                <div className="left-content text-[4vw] font-extralight w-2/5 pr-6">
                    <span className='text-7xl'>{ourStoryTitleLeft2}</span>
                </div>
                <div className="right-content w-3/5">
                    <Markdown>{ourStoryRightContent2}</Markdown>
                </div>
                <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>

            </div>
            <div className="our-people w-[80vw] mx-auto font-normal py-[5vw] relative">
                <div className="left-content text-[4vw] font-extralight pr-6 mb-20">
                    <span className='text-7xl'>{ourStoryUpperTitle3}</span>
                </div>
                <div className="right-content">
                    <div>
                        <Markdown>{ourStoryBottomContent3}</Markdown>
                    </div>
                </div>
                <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>

            </div>
        </div>
     
    )
    
}

function Award({data}){
    
    const awards = data.Award;

    return(
        <div className="about-award w-[80vw] mx-auto font-normal py-[5vw] relative">
            <div className="list-award flex flex-wrap">
                {awards.map((award, index) => (
                    <div key={index} className="box flex w-1/4 items-center mx-[15px] my-10">
                        <div className="pic-award w-1/4 relative">
                            <Image className="relative block w-full h-auto" src={`${process.env.NEXT_PUBLIC_API_URL}${award.picture.data.attributes.url}`} width={142}
      height={312} alt={award.Title}/>
                        </div>
                        <div className="text-award w-3/4 py-0 px-4"> <p>N.H.O</p>
                            <p><strong>{award.Title}</strong></p>
                            {/* <p><strong>(Country Winner)</strong></p>
                            <p>Asia Property Award 2021</p> */}
                        </div>
                    </div>
                ))}                            
            </div>
        </div>
    )
}

function Milestone({data}){

    const milestoneLeftTitle1 = data.LeftTitle1;
    const milestoneRightContent1 = data.RightContent1;
    const milestones = data.Milestone;

    return(
        <div className="about-milestone">
            <div className="our-history flex w-[80vw] mx-auto font-normal py-[5vw] relative">
                <div className="left-content text-[4vw] font-extralight w-2/5 pr-6">
                    <span className='text-7xl'>{milestoneLeftTitle1}</span>
                </div>
                <div className="right-content w-3/5">
                    <div className="text-field">
                        <p>{milestoneRightContent1}</p>
                    </div>
                </div>
                <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-black"></span>
            </div>

            <div className="our-milstone w-[80vw] mx-auto font-normal relative">
                <div className="list-his">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="his-box relative flex justify-between px-0 py-8">
                            <span className="special-numb relative block font-thin text-7xl text-[var(--bgactive)] ">{milestone.Year}</span>
                            <div className="wrap-history-wrap relative w-1/2">
                                <div className="row-history-box flex relative items-center mb-2">
                                    <div className="pic-history pt-[25%] w-1/4 relative block">
                                        <Image
                                            className="absolute w-full h-full top-0 left-0 object-contain"
                                            src={`${process.env.NEXT_PUBLIC_API_URL}${milestone.imageProject.data.attributes.url}`}
                                            alt={milestone.ProjectTitle}
                                            width={80}
                                            height={186}
                                        />
                                    </div>
                                    <div className="text-history w-3/4 pl-8 relative block ">
                                        <p className="text-xl">
                                        <strong>{milestone.ProjectTitle}</strong>
                                        </p>
                                        <p className="text-xl">High-Rise (Commercial Housing)</p>
                                    </div>
                                </div>
                            </div>
                            <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function StrategicPartner({data}){

    const ourStrategicPartnerLeftTitle1 = data.LeftTitle1;
    const ourStrategicPartnerRightContent1 = data.RightContent1;
    const partners = data.Partner;

    return(
        <div className="about-strategic-partner">
            <div className="our-strategic-partner flex w-[80vw] mx-auto font-normal py-[5vw] relative">    
                <div className="left-content text-[4vw] font-extralight w-2/5 pr-6">
                    <span className='text-7xl'>{ourStrategicPartnerLeftTitle1}</span>
                </div>
                <div className="right-content w-3/5">
                    <Markdown>{ourStrategicPartnerRightContent1}</Markdown>
                </div>
                <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-black"></span>
            </div>
            <div className="about-partner relative">
                <div className="wrap-content block w-[var(--wrapcontent)] m-auto py-[5vw] px-0 relative h-auto z-10">
                    <div className="list-partner flex-wrap relative flex">
                        {partners.map((partner, index) => (
                        <div key={index} className="box-partner w-1/2 p-12 relative flex">
                            <div className="pic-partner h-auto w-[45%] relative block">
                                <Image 
                                    className="w-full h-auto object-left object-center"
                                    src={`${process.env.NEXT_PUBLIC_API_URL}${partner.LeftLogo.data.attributes.url}`}
                                    width={294}
                                    height={215}
                                />
                            </div>
                            <div className="text-partner w-[55%] text-[--var(--bgactive)] pl-8 relative text-xl">
                                <p>{partner.PartnerDesc}</p>
                                <div className="ani-view-details">
                                    <Link
                                        className="view-details dark sticky-button detect-on-view is-inview relative flex item-center p-0 border-0 mt-8 mx-0 mb-0 w-[4rem] h-[4rem]"
                                        href="/"
                                    >
                                        <svg className="w_100 h_100" viewBox="0 0 80 80">
                                            <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                                            <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                                        </svg>
                                        <div className="view_i"></div>
                                        <span className="o_h"><span>{partner.Button}</span></span>     
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default function TabAbout({ data }) {
    return (
        <>
            <Tab.Group>
                <Tab.List>
                {data[5].map((tab, index) => (
                    <Tab as={Fragment} key={index} className={`opacity-60 hover:opacity-100 ${index === 0 ? 'first:ml-0 my-11 mr-9' : 'my-11 mx-9'}`}>
                    {({ selected }) => (
                        <button
                        className={
                            selected ? 'active:opacity-100 visited:opacity-100 focus:opacity-100 target:opacity-100 focus-visible:content-none selected' : ''
                        }
                        >
                        {tab}
                        </button>
                    )}
                    </Tab>
                ))}
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <OurStory data={data[0].data.attributes}/>
                    </Tab.Panel>
                    <Tab.Panel>
                        <Award data={data[1].data.attributes}/>
                    </Tab.Panel>
                    <Tab.Panel>
                        <Milestone data={data[2].data.attributes}/>
                    </Tab.Panel>
                    <Tab.Panel>
                        <StrategicPartner data={data[3].data.attributes}/>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </>
    );
}

