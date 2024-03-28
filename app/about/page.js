import Link from "next/link";

export default function About() {

    const title = 'About us';
    const aboutArr = ['OurStory', 'Awards', 'Milestone', 'Strategic Partners', 'Join Us'];
    const ourMission = {
        "title": "Our Mission",
        // "content": [
        //     {
        //         "type": "paragraph",
        //         "children": [
        //             {
        //                 "type": "text",
        //                 "text": "Hòa Nhịp Con Người – Vùng đất – Cộng đồng",
        //                 "bold": true
        //             }
        //         ]
        //     },
        //     {
        //         "type": "paragraph",
        //         "children": [
        //             {
        //                 "type": "text",
        //                 "text": "Suốt chiều dài lịch sử, con người gắn kết với vùng đất mình sinh sống, thông qua gia đình và cộng đồng. Là nhà phát triển bất động sản, chúng tôi hiểu rằng sự hòa quyện giữa Con người – Đất đai  – Cộng đồng là nhân tố quan trọng mở ra một cuộc sống tốt đẹp mà ai nấy đều mong ước. "
        //             }
        //         ]
        //     },
        //     {
        //         "type": "paragraph",
        //         "children": [
        //             {
        //                 "type": "text",
        //                 "text": "Để nuôi dưỡng sự hòa quyện này, chúng tôi thấu hiểu từng vùng đất, đưa hơi thở đời sống vào quy hoạch tổng thể và kết cấu công trình, đưa văn hoá bản địa vào đường nét kiến trúc. Chúng tôi không ngừng thay đổi và sáng tạo trong sự cân bằng với an toàn và phát triển bền vững. Chúng tôi không xây nhà mà hòa nhịp những âm điệu của cuộc sống trong một bản giao hưởng cao quý giữa Con người - Đất đai và Cộng đồng."
        //             }
        //         ]
        //     },
        //     {
        //         "type": "paragraph",
        //         "children": [
        //             {
        //                 "type": "text",
        //                 "text": "Con người",
        //                 "bold": true
        //             }
        //         ]
        //     },
        //     {
        //         "type": "paragraph",
        //         "children": [
        //             {
        //                 "type": "text",
        //                 "text": "Chúng tôi hướng tới việc nuôi dưỡng mối quan hệ lâu dài vào sâu sắc với khách hàng, nhà đầu tư và đối tác. Để làm tốt điều này, chúng tôi không ngừng tìm tòi, thử nghiệm, đưa ra các giải pháp mang lại trải nghiệm tích cực để thúc đẩy sự phát triển chung."
        //             }
        //         ]
        //     },
        //     {
        //         "type": "paragraph",
        //         "children": [
        //             {
        //                 "type": "text",
        //                 "text": "Cộng đồng",
        //                 "bold": true
        //             }
        //         ]
        //     },
        //     {
        //         "type": "paragraph",
        //         "children": [
        //             {
        //                 "type": "text",
        //                 "text": "Sinh khí cộng đồng có ý nghĩa quan trọng đối với sự phát triển của cá nhân và gia đình. Chúng tôi thiết kế một hệ thống tạo điều kiện cho cư dân có thể giao tiếp với nhau một cách chân thành, thiện chí, để cùng tạo nên các cộng đồng văn minh, hứng khởi và thịnh vượng."
        //             }
        //         ]
        //     }
        // ]
    }

    const ourPhilosophy = {
        "title": "Our Philosophy",
    }
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
                        <ul className="flex">                           
                            {aboutArr.map((about, index) => 
                                (<li key={index}><Link className={index === 0 ? "first:pl-0 py-11 pr-9 block after::content-[''] after::w-[1px]" : "py-11 px-9 block"} href={`/${about.toLowerCase().replace(/\s+/g, '-')}`}>{about}</Link></li>)
                            )}
                        </ul>
                    </div> 
                </div>
            </div>
            <div className="about-content">
                <div className="our-mission flex w-[80vw] mx-auto font-normal">
                    <div className="left-content text-[4vw] font-extralight w-1/2">
                        <h2>{ourMission.title}</h2>
                    </div>
                    <div className="right-content w-1/2">
                        <div>
                            <h1>Harmonizing People – Land – Community</h1>
                            Throughout history, human beings have been deeply connected with land; as individuals, families, and as communities. Having harmony between People, Land and Community is crucial to maintain holistic and sustainable wellness.
                            To nurture a harmonious, we as a developer must first respect the land. We infuse life into our master planning, weave beauty into construction principles, and blend in aesthetic values without sacrificing safety and sustainability. We do not just build homes; we harmonize a wide array of rhythms, pulses and vibes in a noble symphony of People – Land – and Community.
                        </div>
                    </div>
                </div>
                <div className="our-philosophy flex w-[80vw] mx-auto font-normal">
                    <div className="left-content text-[4vw] font-extralight w-1/2">
                        <h2>{ourPhilosophy.title}</h2>
                    </div>
                    <div className="right-content w-1/2">
                        <div>
                            <h1>GROWING TOGETHER</h1>
                            We thrive on the energy of growing together with those who share the same visions and values: Our partners are our employees, families, investors, business partners, and anyone who believes in building a dignified world through the harmony of People-Land-and Community.

                            Persevering for what we believe in together, and embracing our need to do good, even challenges become opportunities.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

