import SlideHome from "../components/homeSlide";
import Link from "next/link";

async function fetchSlider(){
    
  const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/strategic-partner?populate=deep,3`
  );
  if (!res.ok) {
      throw new Error("Failed to fetch data");
  }
  return res.json();
}

const About = () => {
  return(
    <div className="home-intro relative">
      <div className="pic-home-intro">
        <div className="bg-cover">
          <img loading="lazy" src="https://www.nhojsc.vn/pictures/catalog/home/home-intro.jpg" alt="sứ mệnh" width="1500px" height="1500px"/>
        </div>
      </div>

      <div className="text-home-intro">
        <div className="title-big text-ani-item color-blue">
            <div className="text-inner-ani">
              <h2 className="absolute text-title-about block">sứ mệnh</h2>
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
    </div>  
  )
}

export default async function Home() {
  
  return (
    <div className="relative m-0 w-full h-auto p-0">
        <div className="relative m-0" id="home-page">
            <SlideHome/>
            <About/>
        </div>
    </div>
  );
}
