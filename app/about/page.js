"use client"

import Link from "next/link";
import AboutTab from "../components/about-tab";
import { useQuery } from "@tanstack/react-query";

async function fetchHeading() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/about-us?populate=*`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
  

export default function About() {

    const title = 'About us';
    // const aboutArr = [{'OurStory', 'Awards', 'Milestone', 'Strategic Partners', 'Join Us'}];

    const aboutArr = [
        { "title": 'OurStory', "content": <p>Content for Tab 1</p>, "ver": true },
        { "title": 'Awards', "content": <p>Content for Tab 2</p>, "ver": true },
        { "title": 'Milestone', "content": <p>Content for Tab 3</p>, "ver": true },
    ]

    const { data, isLoading, error } = useQuery({
        queryKey: 'myData',
        queryFn: fetchHeading
    });

    // Handle loading and error states
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>An error has occurred: {error.message}</p>;

    function getTitlesFromArray(data) {
        return data.map(item => item.Title);
    }

    const ourStoryCardTitles = getTitlesFromArray(data.data.attributes.OurStoryCard);
    const awardTitles = getTitlesFromArray(data.data.attributes.Award);
    const milestoneCardTitles = getTitlesFromArray(data.data.attributes.MilestoneCard);
    const ourPartnerTitles = getTitlesFromArray(data.data.attributes.OurPartner);

    console.log("Our Story Card Titles:", ourStoryCardTitles);
    console.log("Award Titles:", awardTitles);
    console.log("Milestone Titles:", milestoneCardTitles);
    console.log("Our Partner Titles:", ourPartnerTitles);

    return(
        <div>
            {/* Component */}
            <div className="w-[80vw] mx-auto font-normal text-[5vw] pt-[13rem] px-[0rem] pb-[3rem]">
                <h1>{title}</h1>
            </div>   
            {/* Component */}
            {/* <div className="section-outernav">
                <div className="outer-nav w-[80vw] mx-auto font-normal text-xl">
                    <div className="sub-nav">
                        <ul className="flex">                           
                            {aboutArr.map((about, index) => 
                                (<li key={index}><Link className={index === 0 ? "first:ml-0 my-11 mr-9 block opacity-60 hover:opacity-100 active:opacity-100" : "my-11 mx-9 block hover:text-black opacity-50 hover:opacity-100"} href={`/${about.toLowerCase().replace(/\s+/g, '-')}`}>{about}</Link></li>)
                            )}
                        </ul>
                    </div> 
                </div>
            </div> */}

            <AboutTab tabs={aboutArr}/>

            {/* <div className="about-content">
                <div className="our-mission flex w-[80vw] mx-auto font-normal py-[5vw] relative">    
                    <div className="left-content text-[4vw] font-extralight w-2/5 pr-6">
                        <h2>{ourMission.title}</h2>
                    </div>
                    <div className="right-content w-3/5">
                        <div>
                            <h3 className="font-bold text-xl mb-10">Harmonizing People – Land – Community</h3>
                            <p className="text-xl opacity-60">Throughout history, human beings have been deeply connected with land; as individuals, families, and as communities. Having harmony between People, Land and Community is crucial to maintain holistic and sustainable wellness.
                            To nurture a harmonious, we as a developer must first respect the land. We infuse life into our master planning, weave beauty into construction principles, and blend in aesthetic values without sacrificing safety and sustainability. We do not just build homes; we harmonize a wide array of rhythms, pulses and vibes in a noble symphony of People – Land – and Community.
                            </p>
                        </div>
                    </div>
                    <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-black"></span>
                </div>
                <div className="our-philosophy flex w-[80vw] mx-auto font-normal py-[5vw] relative">
                    <div className="left-content text-[4vw] font-extralight w-2/5 pr-6">
                        <h2>{ourPhilosophy.title}</h2>
                    </div>
                    <div className="right-content w-3/5">
                        <div>
                            <h3 className="font-bold text-xl mb-10">GROWING TOGETHER</h3>
                            <p className="text-xl opacity-60">We thrive on the energy of growing together with those who share the same visions and values: Our partners are our employees, families, investors, business partners, and anyone who believes in building a dignified world through the harmony of People-Land-and Community.

                            Persevering for what we believe in together, and embracing our need to do good, even challenges become opportunities.
                            </p>
                        </div>
                    </div>
                    <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-black"></span>

                </div>
                <div className="our-philosophy w-[80vw] mx-auto font-normal py-[5vw] relative">
                    <div className="left-content text-[4vw] font-extralight pr-6 mb-20">
                        <h2>{ourPeople.title}</h2>
                    </div>
                    <div className="right-content">
                        <div>
                            <h3 className="font-bold text-xl mb-10">THE HEART AND MIND</h3>
                            <p className="text-xl opacity-60">
                            The importance of a good home should not be underestimated. It is the key foundation for families to build their lives together. It is also the origins from which communities and cultures form.

We see ourselves as a company in the people business, building homes. Our bottom line are not only numbers, they are also laughter, joy, care and happiness. It takes more than bricks and steel to build. In the first place it takes happy and genuine people to deliver our very specific “bottom lines”. We all this the business of the heart.

Then with the right hearts in place, the right minds will come along. With this special integrated structure, we have the synergy and the expertise on hand to successfully offer high quality services and projects. We are all working towards achieving a common goal: to provide “Homes for Everyone”
                            </p>
                        </div>
                    </div>
                    <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-black"></span>
                </div>
            </div> */}
            
        </div>
    )
}

