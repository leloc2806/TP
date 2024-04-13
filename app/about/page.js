import { MotionDiv } from "../components/MotionDiv";
import AboutTab from "../components/about-tab";
import Markdown from "react-markdown";

async function getTitlePage() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/about-us?populate=deep,3`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

async function getOurStory() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/about-us-our-story?populate=deep,3`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

async function getAward(){
    
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/about-us-award?populate=deep,3`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

async function getMilestone(){
    
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/about-us-milestone?populate=deep,3`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

async function getStrategicPartner(){
    
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/strategic-partner?populate=deep,3`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

async function getJoinUs(){
    
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/about-us-join-us?populate=deep,3`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function About() {
    // const [activeTab, setActiveTab] = useState(0);
    const titlePage = await getTitlePage();
    const ourStory = await getOurStory();
    const award = await getAward();
    const milestone = await getMilestone();
    const strategicPartner = await getStrategicPartner();
    const joinUs = await getJoinUs();
    
    const title = titlePage.data.attributes.Title;
    const ourStoryTitle = ourStory.data.attributes.Title;
    const ourAward = award.data.attributes.Title;
    const ourMilestone = milestone.data.attributes.Title;
    const ourStrategicPartner = strategicPartner.data.attributes.Title;
    const ourJoinUs = joinUs.data.attributes.Title;

    const aboutArr = [ourStoryTitle, ourAward, ourMilestone, ourStrategicPartner, ourJoinUs];

    const variants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    return(
        <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"   
            transition={{
                delay: 1,
                ease: "easeInOut",
                duration: 0.5,
            }}
            className="relative m-0">
                {/* Component */}
                <div className="title-page block relative h-auto w-[80vw] mx-auto font-normal text-[5vw] pt-[13rem] px-[0rem] pb-[3rem]">
                    <div className="relative block w-full h-auto overflow-hidden">
                        <h1 className="relative block text-[6vw] font-normal">{title}</h1>
                    </div>
                    <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>
                </div>   
                
                {/* Component */}
                <div className="section-outernav">
                    <div className="outer-nav w-[80vw] mx-auto font-normal text-xl">
                        <div className="sub-nav">
                            <AboutTab data={[ourStory, award, milestone ,strategicPartner, joinUs, aboutArr]}/>
                        </div> 
                    </div>
                </div>

                
        </MotionDiv>
    )
}

