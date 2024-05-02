import { animate } from "framer-motion";
import { MotionDiv } from "../components/MotionDiv";
import SlideHome from "../components/homeSlide";
import Link from "next/link";
import SectionComponent from "@/app/components/sectionComponent";
import SlidePartner from "../components/partnerSlide";

async function fetchSlider(){
    
  const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/strategic-partner?populate=deep,3`
  );
  if (!res.ok) {
      throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  
  return (
    <div 
      className="relative m-0 w-full h-auto p-0"
      
    >
        <div className="relative m-0 overflow-hidden" id="home-page">
          <SectionComponent 
            className="home-banner relative" 
            translate={"translateX(-200px)"}
          >
            <SlideHome/>
          </SectionComponent>
            {/* <About/> */}
          <SectionComponent 
          
            className="home-intro relative"
            translate={"translateY(200px)"}>
            <div className="pic-home-intro">
              <div className="bg-cover">
                <img loading="lazy" src="https://www.nhojsc.vn/pictures/catalog/home/home-intro.jpg" alt="sứ mệnh" width="1500px" height="1500px"/>
              </div>
            </div>

            <div className="text-home-intro">
              <div className="title-big text-ani-item color-blue">
                  <div className="text-inner-ani">
                    <h2 className="text-title-about block">sứ mệnh</h2>
                  </div>
              </div>
              <div className="box-txt color-blue ani-item on-show">
                  <div className="text-inner">
                    <p>Suốt chiều dài lịch sử, con người gắn kết với vùng đất mình sinh sống, thông qua gia đình và cộng đồng. Là nhà phát triển bất động sản, chúng tôi hiểu rằng sự hòa quyện giữa Con người – Đất đai &nbsp;– Cộng đồng là nhân tố quan trọng mở ra một cuộc sống tốt đẹp mà ai nấy đều mong ước.&nbsp;</p>
                    <p>Để nuôi dưỡng sự hòa quyện này, chúng tôi thấu hiểu từng vùng đất, đưa hơi thở đời sống vào quy hoạch tổng thể và kết cấu công trình, đưa văn hoá bản địa vào đường nét kiến trúc. Chúng tôi không ngừng thay đổi và sáng tạo trong sự cân bằng với an toàn và phát triển bền vững. Chúng tôi không xây nhà mà hòa nhịp những âm điệu của cuộc sống trong một bản giao hưởng cao quý giữa Con người - Vùng đất và Cộng đồng.</p>
                  </div>
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
                          <span className="o_h"><span>Xem them</span></span>     
                      </Link>
                  </div>
              </div>
            </div>
          </SectionComponent>
          <SectionComponent 
            className="home-commercial relative"
            translate={"translateY(-200px)"}>
            <div className="flex flex-wrap w-full h-auto m-auto justify-start z-10 relative">
              <div className="collection-box">
                <Link className="link-load" href='/'/>
                <div className="pic-img pic-collection">
                  <img loading="lazy" src="https://www.nhojsc.vn/pictures/catalog/home/commercial/02.jpg" alt="Nhà Ở" className="trans-y lazy" data-speed="-2" data-scroll="" data-scroll-speed="-2" data-scroll-direction="vertical" width="1200px" height="810px"/>
                </div>
                <div className="inside-text color-white">
                  <h2>Nhà Ở</h2>
                </div>
              </div>
              <div className="collection-box">
                <Link className="link-load" href='/'/>
                <div className="pic-img pic-collection">
                  <img loading="lazy" src="https://www.nhojsc.vn/pictures/catalog/home/commercial/02.jpg" alt="Nhà Ở" className="trans-y lazy" data-speed="-2" data-scroll="" data-scroll-speed="-2" data-scroll-direction="vertical" width="1200px" height="810px"/>
                </div>
                <div className="inside-text color-white">
                  <h2>Nhà Ở</h2>
                </div>
              </div>
              <div className="collection-box">
                <Link className="link-load" href='/'/>
                <div className="pic-img pic-collection">
                  <img loading="lazy" src="https://www.nhojsc.vn/pictures/catalog/home/commercial/02.jpg" alt="Nhà Ở" className="trans-y lazy" data-speed="-2" data-scroll="" data-scroll-speed="-2" data-scroll-direction="vertical" width="1200px" height="810px"/>
                </div>
                <div className="inside-text color-white">
                  <h2>Nhà Ở</h2>
                </div>
              </div>
              <div className="collection-box">
                <Link className="link-load" href='/'/>
                <div className="pic-img pic-collection">
                  <img loading="lazy" src="https://www.nhojsc.vn/pictures/catalog/home/commercial/02.jpg" alt="Nhà Ở" className="trans-y lazy" data-speed="-2" data-scroll="" data-scroll-speed="-2" data-scroll-direction="vertical" width="1200px" height="810px"/>
                </div>
                <div className="inside-text color-white">
                  <h2>Nhà Ở</h2>
                </div>
              </div>
              <div className="collection-box">
                <Link className="link-load" href='/'/>
                <div className="pic-img pic-collection">
                  <img loading="lazy" src="https://www.nhojsc.vn/pictures/catalog/home/commercial/02.jpg" alt="Nhà Ở" className="trans-y lazy" data-speed="-2" data-scroll="" data-scroll-speed="-2" data-scroll-direction="vertical" width="1200px" height="810px"/>
                </div>
                <div className="inside-text color-white">
                  <h2>Nhà Ở</h2>
                </div>
              </div>
            </div>
          </SectionComponent>
          <SectionComponent 
            className="home-news relative"
            translate={"translateX(200px)"}>
            <div className="wrap-content">
              <div className="left-content">
                <div className="title-big text-ani-item color-blue">
                  <div className="text-inner-ani">
                    <h2 className="text-title-about block">đang diễn ra</h2>
                  </div>
                </div>
              </div>
              <div className="right-content">
                <div className="news-list-home ani-item on-show">  
                <div className="item-news-home">
                  <div className="pic-news-home">
                    <div className="pic-img">
                      <img loading="lazy" src="https://www.nhojsc.vn/pictures/catalog/news/t42024/z5377831830863d83297b3453ca6a740c5c75c9281d3ec.jpg" alt="AEON MALL THU HÚT NGƯỜI HÀ NỘI ĐỔ VỀ QUẢNG NINH TÌM CĂN HỘ" width="2000px" height="1333px"/>
                    </div>
                  </div>
                  <div className="txt-news-home">
                    <h3>AEON MALL THU HÚT NGƯỜI HÀ NỘI ĐỔ VỀ QUẢNG NINH TÌM CĂN HỘ</h3>
                  </div>
                  <a className="link-load" aria-label="view" href="https://www.nhojsc.vn/tin-tuc/tin-tuc-/aeon-mall-thu-hut-nguoi-ha-noi-do-ve-quang-ninh-tim-can-ho-1.html"></a>
                  </div>  
                  <div className="item-news-home">
                    <div className="pic-news-home">
                      <div className="pic-img">
                        <img loading="lazy" src="https://www.nhojsc.vn/pictures/catalog/news/t42024/Giai-Golf.jpg" alt="N.H.O TÀI TRỢ GIẢI GOLF “2024 HAI PHONG KOREAN GOLF TOURNAMENT” " width="2000px" height="1333px"/>
                      </div>
                    </div>
                    <div className="txt-news-home">
                      <h3>N.H.O TÀI TRỢ GIẢI GOLF “2024 HAI PHONG KOREAN GOLF TOURNAMENT” </h3>
                    </div>
                    <a className="link-load" aria-label="view" href="https://www.nhojsc.vn/tin-tuc/tin-tuc-/n-h-o-tai-tro-giai-golf-2024-hai-phong-korean-golf-tournament.html"></a>
                  </div>  
                  <div className="item-news-home">
                    <div className="pic-news-home">
                      <div className="pic-img">
                        <img loading="lazy" src="https://www.nhojsc.vn/pictures/catalog/news/t42024/z533005074232806e98126becf0d49dc29288c43609232.jpg" alt="N.H.O ĐẨY MẠNH HỢP TÁC CÙNG KOCHAM VÀ HIỆP HỘI NGƯỜI HÀN QUỐC TẠI HẢI PHÒNG" width="2000px" height="1320px"/>
                      </div>
                    </div>
                    <div className="txt-news-home">
                      <h3>N.H.O ĐẨY MẠNH HỢP TÁC CÙNG KOCHAM VÀ HIỆP HỘI NGƯỜI HÀN QUỐC TẠI HẢI PHÒNG</h3>
                    </div>
                    <a className="link-load" aria-label="view" href="https://www.nhojsc.vn/tin-tuc/tin-tuc-/n-h-o-day-manh-hop-tac-cung-kocham-va-hiep-hoi-nguoi-han-quoc-tai-hai-phong.html"></a>
                  </div>  
                </div>
              </div>  
              <div className="ani-view-details">
                <Link
                    className="view-details dark sticky-button detect-on-view is-inview relative flex item-center p-0 border-0 mt-8 mx-0 mb-0 w-[5rem] h-[5rem]"
                    href="/"
                >
                    <svg className="w_100 h_100" viewBox="0 0 80 80">
                        <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                        <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                    </svg>
                    <div className="view_i"></div>
                    <span className="o_h"><span>Xem them</span></span>     
                </Link>
              </div>  
          </div>
          </SectionComponent>
          <SectionComponent 
            className="home-partner relative"
            translate={"translateX(-200px)"}>
            <SlidePartner/>
          </SectionComponent>
        </div>
    </div>
  );
}
