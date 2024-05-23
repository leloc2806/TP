import GMap, { Map } from "@/app/components/map";
import SectionComponent from "@/app/components/sectionComponent";
import TitlePage from "@/app/components/titlepage";
import flattenAttributes from "@/app/lib/utils";
import Link from "next/link";

export const metadata = {
    title: "Công ty cổ phần năng lượng Thành Phát",
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
      title: "Công ty cổ phần năng lượng Thành Phát",
      description:
        "Nhựa Thành Phát - Sản phẩm nhựa uy tín hàng đầu Việt Nam",
    },
    twitter: {
      card: "summary_large_image",
      title: "Công ty cổ phần năng lượng Thành Phát",
      description:
        "Nhựa Thành Phát - Sản phẩm nhựa uy tín hàng đầu Việt Nam",
      creator: "@thanhphat",
      site: "@thanhphat",
    },
    alternates: {
      canonical: "https://www.nhuathanhphat.vn/"
    }
  };

async function fetchSocial(){
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/social?populate=deep,2`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }
      catch(error){
          // Handle errors here, such as logging or displaying an error message
          console.error("Error fetching slider data:", error.message);
          throw error; // Re-throw the error to be handled by the caller if needed
      }
}

export default async function Contact(){

    const socialLink = await fetchSocial();
    const social = flattenAttributes(socialLink);

    return (
        <div className="relative m-0 contact-page">
            <SectionComponent
            className="section-title-page"
            translate={"translateY(200px)"}>
                <div className="wrap-content">
                    <TitlePage title={'Liên hệ'}/>

                </div>
            </SectionComponent>
            <SectionComponent 
            className="agency is-show block relative"
            translate={"translateY(-200px)"}
            >
                <div className="wrap-content">
                    <div className="title-big text-ani-item color-blue">
                        <div className="text-inner-ani">
                            <h2 className="text-title-about block">trụ sở làm việc</h2>
                        </div>
                    </div>
                    <div className={"map-box"}>
                        <GMap/>
                        <div className="list-view">
                            <ul>   
                                <li className="agen_map">
                                    <h3>Trụ sở chính</h3>  
                                    <div>
                                        
                                        <p>{social.Address}</p>
                                    </div>   
                                    <div>
                                        
                                        <Link href={`tel:${social.Phone}`}>{social.Phone}</Link> 
                                    </div>   
                                    <div>
                                        
                                    </div>  
                                    <button className="no-display link-load-map"></button>
                                </li>   
                            </ul>  
                        </div>
                    </div>
                </div>
            </SectionComponent>
            <SectionComponent 
            className="half-wrap half-50 is-show"
            translate={"translateY(-200px)"}
            >
                <div className="wrap-content">
                    <div className="left-content">
                        <div className="title-big text-ani-item color-blue">
                            <div className="text-inner-ani">
                                <h2 className="text-title-about block">kết nối với chúng tôi</h2>
                            </div>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="list-connect ani-item on-show">  
                            <div className="box-connect connect-fb">
                                <a href="#" target="_blank" rel="noopener"></a>
                            </div>    
                            <div className="box-connect connect-zalo">
                                <a href="#" target="_blank" rel="noopener"></a>
                            </div>  
                        </div>
                    </div>
                    <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>
                </div>
            </SectionComponent>
            <SectionComponent 
            className="half-wrap half-50 page-contact is-show"
            translate={"translateY(-200px)"}
            >
                <div className="wrap-content">
                    <div className="left-content">
                        <div className="title-big text-ani-item color-blue">
                            <div className="text-inner-ani">
                                <h2 className="text-title-about block">nghề nghiệp</h2>
                            </div>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="company-text">
                            <ul className="company-info">
                                <li>
                                    <span>
                                        <svg viewBox="0 0 60 60">
                                            <circle fill="currentColor" cx="30" cy="18.2" r="11.8"></circle>
                                            <path fill="currentColor" d="M30,33.9c-9.8,0-17.8,8-17.8,17.8c0,1.1,0.9,2,2,2h31.6c1.1,0,2-0.9,2-2C47.8,41.9,39.8,34,30,33.9z"></path>
                                        </svg>
                                    </span>
                                    <p>Phòng nhân sự</p>
                                </li>
                                <li>
                                    <span>
                                    </span>
                                    <a href={`mailto:${social.Email}`}>{social.Email}</a> 
                                </li>
                                <li>
                                    <span className="address">
                                        <svg viewBox="0 0 60 60">
                                        <path fill="currentColor" d="M30,6C16.7,6,6,16.7,6,30s10.8,24,24,24s24-10.8,24-24C54,16.7,43.3,6,30,6z M47.9,28h-7c-0.5-5.2-2-10.3-4.6-14.8
                                            C42.7,15.6,47.1,21.3,47.9,28z M25.4,34h9.3c-0.8,4.2-2.4,8.2-4.6,11.8C27.7,42.2,26.2,38.2,25.4,34z M25.1,28
                                            c0.6-4.9,2.2-9.6,4.9-13.8c2.7,4.2,4.3,8.9,4.9,13.8H25.1z M23.6,13.2c-2.6,4.6-4.1,9.6-4.6,14.8h-7C12.9,21.3,17.3,15.6,23.6,13.2z
                                            M12.5,34h6.8c0.7,4.5,2.2,8.9,4.4,12.8C18,44.7,13.8,39.9,12.5,34z M36.4,46.8c2.2-4,3.7-8.3,4.4-12.8h6.8
                                            C46.2,39.9,42,44.7,36.4,46.8L36.4,46.8z"></path>
                                        </svg>
                                    </span>
                                    <Link href={`/about`}>Giới thiệu về chúng tôi</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SectionComponent>
        </div>
    )
}