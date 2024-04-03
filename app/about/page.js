import Link from "next/link";
import AboutTab from "../components/about-tab";

// async function getTitlePage() {
//     const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/about-us?populate=deep,3`
//     );
//     if (!res.ok) {
//         throw new Error("Failed to fetch data");
//     }
//     return res.json();
// }

// async function getOurStory() {
//     const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/about-us-our-story?populate=deep,3`
//     );
//     if (!res.ok) {
//         throw new Error("Failed to fetch data");
//     }
//     return res.json();
// }

// async function getAward(){
    
//     const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/about-us-award?populate=deep,3`
//     );
//     if (!res.ok) {
//         throw new Error("Failed to fetch data");
//     }
//     return res.json();
// }

// async function getMilestone(){
    
//     const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/about-us-milestone?populate=deep,3`
//     );
//     if (!res.ok) {
//         throw new Error("Failed to fetch data");
//     }
//     return res.json();
// }

// async function getStrategicPartner(){
    
//     const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/strategic-partner?populate=deep,3`
//     );
//     if (!res.ok) {
//         throw new Error("Failed to fetch data");
//     }
//     return res.json();
// }

// async function getJoinUs(){
    
//     const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/about-us-join-us?populate=deep,3`
//     );
//     if (!res.ok) {
//         throw new Error("Failed to fetch data");
//     }
//     return res.json();
// }


export default async function About() {
    // const [activeTab, setActiveTab] = useState(0);
    // const titlePage = await getTitlePage();
    // const ourStory = await getOurStory();
    // const award = await getAward();
    // const milestone = await getMilestone();
    // const strategicPartner = await getStrategicPartner();
    // const joinUs = await getJoinUs();
    
    // const title = titlePage.data.attributes.Title;
    // const ourStoryTitle = ourStory.data.attributes.Title;
    // const ourAward = award.data.attributes.Title;
    // const ourMilestone = milestone.data.attributes.Title;
    // const ourStrategicPartner = strategicPartner.data.attributes.Title;
    // const ourJoinUs = joinUs.data.attributes.Title;

    const title = 'Test'

    const aboutArr = ['ourStoryTitle', 'ourAward', 'ourMilestone', 'ourStrategicPartner', 'ourJoinUs'];

    const activeTab = '1';

    return(
        <div>
            {/* Component */}
            <div className="w-[80vw] mx-auto font-normal text-[5vw] pt-[13rem] px-[0rem] pb-[3rem]">
                <h1>{title}</h1>
            </div>   
            {/* Component */}
            <div className="section-outernav">
                <div className="outer-nav w-[80vw] mx-auto font-normal text-xl">
                    <div className="sub-nav">
                        <div className="flex">                           
                            {aboutArr.map((about, index) => 
                                (<button key={index} 
                                    className={`opacity-60 hover:opacity-100 ${activeTab === index 
                                        ? "active:opacity-100 visited:opacity-100 focus:opacity-100" 
                                        : ""} ${index === 0 ? 'first:ml-0 my-11 mr-9' : 'my-11 mx-9'}`}     
                                        
                                >                         
                                    {about.title}
                                </button>)
                            )}
                        </div>
                    </div> 
                </div>
            </div>

            {/* <AboutTab tabs={aboutArr}/> */}

            <div className="about-content">
                <div className="our-mission flex w-[80vw] mx-auto font-normal py-[5vw] relative">    
                    <div className="left-content text-[4vw] font-extralight w-2/5 pr-6">
                        <h2>Our Mission</h2>
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
                        <h2>ourPhilosophy</h2>
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
                        <h2>ourPeople</h2>
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
            </div>
            <div className="about-award w-[80vw] mx-auto font-normal py-[5vw] relative">
                <div className="list-award flex flex-wrap">
                    <div className="box flex w-1/4 items-center mx-[15px] my-10">
                        <div className="pic-award w-1/4">
                            <img src="https://www.nhojsc.vn/pictures/catalog/about/award/01.jpg"></img>
                        </div>
                        <div className="text-award w-3/4"> <p>N.H.O</p>
                            <p><strong>Best Boutique Developer.</strong></p>
                            <p><strong>(Country Winner)</strong></p>
                            <p>Asia Property Award 2021</p>
                        </div>
                    </div>           
                    <div className="box flex w-1/4 items-center mx-[15px] my-10">
                        <div className="pic-award w-1/4">
                            <img src="https://www.nhojsc.vn/pictures/catalog/about/award/01.jpg"></img>
                        </div>
                        <div className="text-award w-3/4"> <p>N.H.O</p>
                            <p><strong>Best Boutique Developer.</strong></p>
                            <p><strong>(Country Winner)</strong></p>
                            <p>Asia Property Award 2021</p>
                        </div>
                    </div>
                    <div className="box flex w-1/4 items-center mx-[15px] my-10">
                        <div className="pic-award w-1/4">
                            <img src="https://www.nhojsc.vn/pictures/catalog/about/award/01.jpg"></img>
                        </div>
                        <div className="text-award w-3/4"> <p>N.H.O</p>
                            <p><strong>Best Boutique Developer.</strong></p>
                            <p><strong>(Country Winner)</strong></p>
                            <p>Asia Property Award 2021</p>
                        </div>
                    </div>   
                    <div className="box flex w-1/4 items-center mx-[15px] my-10">
                        <div className="pic-award w-1/4">
                            <img src="https://www.nhojsc.vn/pictures/catalog/about/award/01.jpg"></img>
                        </div>
                        <div className="text-award w-3/4"> <p>N.H.O</p>
                            <p><strong>Best Boutique Developer.</strong></p>
                            <p><strong>(Country Winner)</strong></p>
                            <p>Asia Property Award 2021</p>
                        </div>
                    </div>   
                    <div className="box flex w-1/4 items-center mx-[15px] my-10">
                        <div className="pic-award w-1/4">
                            <img src="https://www.nhojsc.vn/pictures/catalog/about/award/01.jpg"></img>
                        </div>
                        <div className="text-award w-3/4"> <p>N.H.O</p>
                            <p><strong>Best Boutique Developer.</strong></p>
                            <p><strong>(Country Winner)</strong></p>
                            <p>Asia Property Award 2021</p>
                        </div>
                    </div>   
                    <div className="box flex w-1/4 items-center mx-[15px] my-10">
                        <div className="pic-award w-1/4">
                            <img src="https://www.nhojsc.vn/pictures/catalog/about/award/01.jpg"></img>
                        </div>
                        <div className="text-award w-3/4"> <p>N.H.O</p>
                            <p><strong>Best Boutique Developer.</strong></p>
                            <p><strong>(Country Winner)</strong></p>
                            <p>Asia Property Award 2021</p>
                        </div>
                    </div>                                
                </div>
            </div>
            <div className="about-milestone">
                <div className="our-history flex w-[80vw] mx-auto font-normal py-[5vw] relative">    
                    <div className="left-content text-[4vw] font-extralight w-2/5 pr-6">
                        <h2>our history and milestones</h2>
                    </div>
                    <div className="right-content w-3/5">
                        <div>
                            <p className="text-xl opacity-60">N.H.O was established 2012 with the goal to become a provid of good, affordable homes all over Vietnam. Since then, we have been striving to provide not only buildings, but to create value homes, families and communities. With our international team dedicated professionals, we believe that we are a positive force increasing the living standards of the country.
                            </p>
                        </div>
                    </div>
                    <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-black"></span>
                </div>
                <div className="our-milstone w-[80vw] mx-auto font-normal relative">
                    <div className="list-his">
                        <div className="his-box relative flex justify-between px-0 py-8">
                            <span className="special-numb relative block font-thin text-7xl text-[var(--bgactive)] ">2022</span>
                            <div className="wrap-history-wrap relative w-1/2">
                                <div className="row-history-box flex relative items-center mb-2">
                                    <div className="pic-history pt-[25%] w-1/4 relative block">
                                        <img className="absolute w-full h-full top-0 left-0 object-contain" src="https://www.nhojsc.vn/pictures/catalog/about/history/01.png" alt="HERA HAI PHONG" width="300px" height="300px"></img>
                                    </div>  
                                    <div className="text-history w-3/4 pl-8 relative block "> 
                                        <p className="text-xl"><strong>HERA HAI PHONG</strong></p> 
                                        <p className="text-xl">High-Rise (Commercial Housing)</p> 
                                    </div>  
                                </div>
                            </div>
                            <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-black"></span>
                        </div>
                        <div className="his-box relative flex justify-between px-0 py-8">
                            <span className="special-numb relative block font-thin text-7xl text-[var(--bgactive)] ">2022</span>
                            <div className="wrap-history-wrap relative w-1/2">
                                <div className="row-history-box flex relative items-center mb-2">
                                    <div className="pic-history pt-[25%] w-1/4 relative block">
                                        <img className="absolute w-full h-full top-0 left-0 object-contain" src="https://www.nhojsc.vn/pictures/catalog/about/history/01.png" alt="HERA HAI PHONG" width="300px" height="300px"></img>
                                    </div>  
                                    <div className="text-history w-3/4 pl-8 relative block "> 
                                        <p className="text-xl"><strong>HERA HAI PHONG</strong></p> 
                                        <p className="text-xl">High-Rise (Commercial Housing)</p> 
                                    </div>  
                                </div>
                            </div>
                            <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-black"></span>
                        </div>
                        <div className="his-box relative flex justify-between px-0 py-8">
                            <span className="special-numb relative block font-thin text-7xl text-[var(--bgactive)] ">2022</span>
                            <div className="wrap-history-wrap relative w-1/2">
                                <div className="row-history-box flex relative items-center mb-2">
                                    <div className="pic-history pt-[25%] w-1/4 relative block">
                                        <img className="absolute w-full h-full top-0 left-0 object-contain" src="https://www.nhojsc.vn/pictures/catalog/about/history/01.png" alt="HERA HAI PHONG" width="300px" height="300px"></img>
                                    </div>  
                                    <div className="text-history w-3/4 pl-8 relative block "> 
                                        <p className="text-xl"><strong>HERA HAI PHONG</strong></p> 
                                        <p className="text-xl">High-Rise (Commercial Housing)</p> 
                                    </div>  
                                </div>
                            </div>
                            <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-black"></span>
                        </div>
                        <div className="his-box relative flex justify-between px-0 py-8">
                            <span className="special-numb relative block font-thin text-7xl text-[var(--bgactive)] ">2022</span>
                            <div className="wrap-history-wrap relative w-1/2">
                                <div className="row-history-box flex relative items-center mb-2">
                                    <div className="pic-history pt-[25%] w-1/4 relative block">
                                        <img className="absolute w-full h-full top-0 left-0 object-contain" src="https://www.nhojsc.vn/pictures/catalog/about/history/01.png" alt="HERA HAI PHONG" width="300px" height="300px"></img>
                                    </div>  
                                    <div className="text-history w-3/4 pl-8 relative block "> 
                                        <p className="text-xl"><strong>HERA HAI PHONG</strong></p> 
                                        <p className="text-xl">High-Rise (Commercial Housing)</p> 
                                    </div>  
                                </div>
                            </div>
                            <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-black"></span>
                        </div>
                        <div className="his-box relative flex justify-between px-0 py-8">
                            <span className="special-numb relative block font-thin text-7xl text-[var(--bgactive)] ">2022</span>
                            <div className="wrap-history-wrap relative w-1/2">
                                <div className="row-history-box flex relative items-center mb-2">
                                    <div className="pic-history pt-[25%] w-1/4 relative block">
                                        <img className="absolute w-full h-full top-0 left-0 object-contain" src="https://www.nhojsc.vn/pictures/catalog/about/history/01.png" alt="HERA HAI PHONG" width="300px" height="300px"></img>
                                    </div>  
                                    <div className="text-history w-3/4 pl-8 relative block "> 
                                        <p className="text-xl"><strong>HERA HAI PHONG</strong></p> 
                                        <p className="text-xl">High-Rise (Commercial Housing)</p> 
                                    </div>  
                                </div>
                            </div>
                            <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-black"></span>
                        </div>
                        <div className="his-box relative flex justify-between px-0 py-8">
                            <span className="special-numb relative block font-thin text-7xl text-[var(--bgactive)] ">2022</span>
                            <div className="wrap-history-wrap relative w-1/2">
                                <div className="row-history-box flex relative items-center mb-2">
                                    <div className="pic-history pt-[25%] w-1/4 relative block">
                                        <img className="absolute w-full h-full top-0 left-0 object-contain" src="https://www.nhojsc.vn/pictures/catalog/about/history/01.png" alt="HERA HAI PHONG" width="300px" height="300px"></img>
                                    </div>  
                                    <div className="text-history w-3/4 pl-8 relative block "> 
                                        <p className="text-xl"><strong>HERA HAI PHONG</strong></p> 
                                        <p className="text-xl">High-Rise (Commercial Housing)</p> 
                                    </div>  
                                </div>
                            </div>
                            <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-black"></span>
                        </div>
                        <div className="his-box relative flex justify-between px-0 py-8">
                            <span className="special-numb relative block font-thin text-7xl text-[var(--bgactive)] ">2022</span>
                            <div className="wrap-history-wrap relative w-1/2">
                                <div className="row-history-box flex relative items-center mb-2">
                                    <div className="pic-history pt-[25%] w-1/4 relative block">
                                        <img className="absolute w-full h-full top-0 left-0 object-contain" src="https://www.nhojsc.vn/pictures/catalog/about/history/01.png" alt="HERA HAI PHONG" width="300px" height="300px"></img>
                                    </div>  
                                    <div className="text-history w-3/4 pl-8 relative block "> 
                                        <p className="text-xl"><strong>HERA HAI PHONG</strong></p> 
                                        <p className="text-xl">High-Rise (Commercial Housing)</p> 
                                    </div>  
                                </div>
                            </div>
                            <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-black"></span>
                        </div>
                    </div>
                </div>                       
            </div>
            <div className="about-strategic-partner">
                <div className="our-strategic-partner flex w-[80vw] mx-auto font-normal py-[5vw] relative">    
                    <div className="left-content text-[4vw] font-extralight w-2/5 pr-6">
                        <h2>our strategic partners</h2>
                    </div>
                    <div className="right-content w-3/5">
                        <div>
                            <p className="text-xl opacity-60">We strive to cultivate a long-term relationship with strategic partners who share the same vision and values. This relationship enables us to create optimal and sustainable solutions for housing while providing higher living standards.

The more we cooperate, the more we understand each other, and the more we grow up together in the mission of harmonizing people, land, and community.
                            </p>
                        </div>
                    </div>
                    <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-black"></span>
                </div>
                <div className="about-partner">
                    <div className="wrap-content w-[--wrapcontent] m-auto py-[5vw] px-0 relative h-auto">
                        <div className="list-partner flex flex-wrap relative">
                            <div className="box-partner w-1/2 p-12 relative flex">
                                <div className="pic-partner h-auto w-[45%] relative">
                                    <img className="w-full h-auto object-left object-center relative block" src="https://www.nhojsc.vn/pictures/catalog/about/partner/01.jpg" alt="ALPHA ENGINEERING" width="596px" height="256px"></img>
                                </div>
                                <div className="text-partner w-[55%] text-[var(--bgactive)] pl-8 relative">
                                    <p className="relative block mx-0 mt-0 mb-8">Alpha Engineering Corporation is a general construction company based in Vietnam providing high quality and innovative service and professional management to valued clients.</p>  
                                    <div className="ani-view-details h-auto relative w-full">
                                        <a className="view-details relative flex item-center p-0 border-0 mt-8 mx-0 mb-0 w-16 h-16 is-inview" aria-label="link" href="https://www.handongec.co.kr/?lang=vi" target="_blank" rel="noopener">
                                            <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 80 80">
                                                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                                                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                                            </svg>
                                            <div className="view_i"></div>
                                            <span className="o_h text-[--bgactive]">
                                                <span>GO TO WEBSITE</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-partner w-1/2 p-12 relative flex">
                                <div className="pic-partner h-auto w-[45%] relative">
                                    <img className="w-full h-auto object-left object-center relative block" src="https://www.nhojsc.vn/pictures/catalog/about/partner/01.jpg" alt="ALPHA ENGINEERING" width="596px" height="256px"></img>
                                </div>
                                <div className="text-partner w-[55%] text-[var(--bgactive)] pl-8 relative">
                                    <p className="relative block mx-0 mt-0 mb-8">Alpha Engineering Corporation is a general construction company based in Vietnam providing high quality and innovative service and professional management to valued clients.</p>  
                                    <div className="ani-view-details h-auto relative w-full">
                                        <a className="view-details relative flex item-center p-0 border-0 mt-8 mx-0 mb-0 w-16 h-16 is-inview" aria-label="link" href="https://www.handongec.co.kr/?lang=vi" target="_blank" rel="noopener">
                                            <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 80 80">
                                                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                                                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                                            </svg>
                                            <div className="view_i"></div>
                                            <span className="o_h text-[--bgactive]">
                                                <span>GO TO WEBSITE</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-partner w-1/2 p-12 relative flex">
                                <div className="pic-partner h-auto w-[45%] relative">
                                    <img className="w-full h-auto object-left object-center relative block" src="https://www.nhojsc.vn/pictures/catalog/about/partner/01.jpg" alt="ALPHA ENGINEERING" width="596px" height="256px"></img>
                                </div>
                                <div className="text-partner w-[55%] text-[var(--bgactive)] pl-8 relative">
                                    <p className="relative block mx-0 mt-0 mb-8">Alpha Engineering Corporation is a general construction company based in Vietnam providing high quality and innovative service and professional management to valued clients.</p>  
                                    <div className="ani-view-details h-auto relative w-full">
                                        <a className="view-details relative flex item-center p-0 border-0 mt-8 mx-0 mb-0 w-16 h-16 is-inview" aria-label="link" href="https://www.handongec.co.kr/?lang=vi" target="_blank" rel="noopener">
                                            <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 80 80">
                                                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                                                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                                            </svg>
                                            <div className="view_i"></div>
                                            <span className="o_h text-[--bgactive]">
                                                <span>GO TO WEBSITE</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-partner w-1/2 p-12 relative flex">
                                <div className="pic-partner h-auto w-[45%] relative">
                                    <img className="w-full h-auto object-left object-center relative block" src="https://www.nhojsc.vn/pictures/catalog/about/partner/01.jpg" alt="ALPHA ENGINEERING" width="596px" height="256px"></img>
                                </div>
                                <div className="text-partner w-[55%] text-[var(--bgactive)] pl-8 relative">
                                    <p className="relative block mx-0 mt-0 mb-8">Alpha Engineering Corporation is a general construction company based in Vietnam providing high quality and innovative service and professional management to valued clients.</p>  
                                    <div className="ani-view-details h-auto relative w-full">
                                        <a className="view-details relative flex item-center p-0 border-0 mt-8 mx-0 mb-0 w-16 h-16 is-inview" aria-label="link" href="https://www.handongec.co.kr/?lang=vi" target="_blank" rel="noopener">
                                            <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 80 80">
                                                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                                                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                                            </svg>
                                            <div className="view_i"></div>
                                            <span className="o_h text-[--bgactive]">
                                                <span>GO TO WEBSITE</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-partner w-1/2 p-12 relative flex">
                                <div className="pic-partner h-auto w-[45%] relative">
                                    <img className="w-full h-auto object-left object-center relative block" src="https://www.nhojsc.vn/pictures/catalog/about/partner/01.jpg" alt="ALPHA ENGINEERING" width="596px" height="256px"></img>
                                </div>
                                <div className="text-partner w-[55%] text-[var(--bgactive)] pl-8 relative">
                                    <p className="relative block mx-0 mt-0 mb-8">Alpha Engineering Corporation is a general construction company based in Vietnam providing high quality and innovative service and professional management to valued clients.</p>  
                                    <div className="ani-view-details h-auto relative w-full">
                                        <a className="view-details relative flex item-center p-0 border-0 mt-8 mx-0 mb-0 w-16 h-16 is-inview" aria-label="link" href="https://www.handongec.co.kr/?lang=vi" target="_blank" rel="noopener">
                                            <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 80 80">
                                                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                                                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                                            </svg>
                                            <div className="view_i"></div>
                                            <span className="o_h text-[--bgactive]">
                                                <span>GO TO WEBSITE</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-partner w-1/2 p-12 relative flex">
                                <div className="pic-partner h-auto w-[45%] relative">
                                    <img className="w-full h-auto object-left object-center relative block" src="https://www.nhojsc.vn/pictures/catalog/about/partner/01.jpg" alt="ALPHA ENGINEERING" width="596px" height="256px"></img>
                                </div>
                                <div className="text-partner w-[55%] text-[var(--bgactive)] pl-8 relative">
                                    <p className="relative block mx-0 mt-0 mb-8">Alpha Engineering Corporation is a general construction company based in Vietnam providing high quality and innovative service and professional management to valued clients.</p>  
                                    <div className="ani-view-details h-auto relative w-full">
                                        <a className="view-details relative flex item-center p-0 border-0 mt-8 mx-0 mb-0 w-16 h-16 is-inview" aria-label="link" href="https://www.handongec.co.kr/?lang=vi" target="_blank" rel="noopener">
                                            <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 80 80">
                                                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                                                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                                            </svg>
                                            <div className="view_i"></div>
                                            <span className="o_h text-[--bgactive]">
                                                <span>GO TO WEBSITE</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>                 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

