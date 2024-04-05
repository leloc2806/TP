import Link from "next/link";
import Image from "next/image";
import AboutTab from "../components/about-tab";
import Markdown from "react-markdown";
import TabAbout from "../components/about-tab";

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
                        <AboutTab data={[ourStory, award, milestone ,strategicPartner, joinUs, aboutArr]}/>
                    </div> 
                </div>
            </div>

            
        </div>
    )
}

