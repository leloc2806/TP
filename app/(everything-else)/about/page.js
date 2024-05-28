import ComboBoxAbout from "@/app/components/about/about-combobox";
import AboutTab from "../../components/about/about-tab";
import SectionComponent from "@/app/components/sectionComponent";

export const metadata = {
    title: "Về chúng tôi | Nhựa Thành Phát",
    description:
      "Nhựa Thành Phát - Sản phẩm nhựa uy tín hàng đầu Việt Nam",
    keywords: [
      "cửa nhựa",
      "cửa",
      "sàn",
      "trần",
      "nhà máy",
      "nhựa",
      "sản xuất",
      "nhập khẩu"
  
    ],
    openGraph: {
      url: "https://www.nhuathanhphat.vn/",
      type: "website",
      title: "Nhựa Thành Phát",
      description:
        "Nhựa Thành Phát - Sản phẩm nhựa uy tín hàng đầu Việt Nam",
    },
    twitter: {
      card: "summary_large_image",
      title: "Nhựa Thành Phát",
      description:
        "Nhựa Thành Phát - Sản phẩm nhựa uy tín hàng đầu Việt Nam",
      creator: "@thanhphat",
      site: "@thanhphat",
    },
    alternates: {
      canonical: "https://www.nhuathanhphat.vn/"
    }
  };

async function getTitlePage() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/about-us?populate=deep,3`, { next: { revalidate: 60 } }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

async function getOurStory() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/about-us-our-story?populate=deep,3`, { next: { revalidate: 60 } }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

async function getAward(){
    
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/about-us-award?populate=deep,3`, { next: { revalidate: 60 } }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

async function getMilestone(){
    
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/about-us-milestone?populate=deep,3`, { next: { revalidate: 60 } }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

async function getStrategicPartner(){
    
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/strategic-partner?populate=deep,3`, { next: { revalidate: 60 } }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

async function getJoinUs(){
    
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/about-us-join-us?populate=deep,3`, { next: { revalidate: 60 } }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function About() {
    try {
        // Initiate fetch operations
        const fetchTitlePagePromise = getTitlePage();
        const fetchOurStoryPromise = getOurStory();
        const fetchAwardPromise = getAward();
        const fetchMilestonePromise = getMilestone();
        const fetchStrategicPartnerPromise = getStrategicPartner();
        const fetchJoinUsPromise = getJoinUs();

        // Wait for all fetch operations to complete
        const [titlePage, ourStory, award, milestone, strategicPartner, joinUs] = await Promise.all([
            fetchTitlePagePromise,
            fetchOurStoryPromise,
            fetchAwardPromise,
            fetchMilestonePromise,
            fetchStrategicPartnerPromise,
            fetchJoinUsPromise,
        ]);

        const title = titlePage.data.attributes.Title;
        const ourStoryTitle = ourStory.data.attributes.Title;
        const ourAward = award.data.attributes.Title;
        const ourMilestone = milestone.data.attributes.Title;
        const ourStrategicPartner = strategicPartner.data.attributes.Title;
        const ourJoinUs = joinUs.data.attributes.Title;

        const aboutArr = [ourStoryTitle, ourAward, ourMilestone, ourStrategicPartner, ourJoinUs];

        return (
            <SectionComponent className="relative m-0 about-page">
                {/* Title Page */}
                <div className="title-page block relative h-auto w-[80vw] max-[1100px]:w-[90vw] mx-auto font-normal text-[5vw] pt-[13rem] px-[0rem] pb-[3rem]">
                    <div className="relative block w-full h-auto overflow-hidden">
                        <h1 className="relative block text-[6vw] font-normal uppercase">{title}</h1>
                    </div>
                    <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>
                </div>

                {/* Outer Navigation */}
                <div className="section-outernav">
                    <div className="outer-nav w-[80vw] max-[1100px]:w-[90vw] mx-auto font-normal text-xl">
                        <div className="sub-nav desktop-tab">
                            <AboutTab data={[ourStory, award, milestone, strategicPartner, joinUs, aboutArr]} />
                        </div>
                        <div className="sub-nav mobile-tab">
                            <ComboBoxAbout data={[ourStory, award, milestone, strategicPartner, joinUs, aboutArr]} />
                        </div>
                    </div>
                </div>
            </SectionComponent>
        );
    } catch (error) {
        // Handle error gracefully in the UI
        return (
            <div className="error-message">
                <h1>Error loading about page</h1>
                <p>{error.message}</p>
            </div>
        );
    }
}