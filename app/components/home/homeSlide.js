"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default function SlideHome({slides}){

    return (
        <Swiper
        spaceBetween={0}
        slidesPerView={1}
        className='h-[100vh]'
        >
        {
            slides.map((slide) => (
                
            <SwiperSlide key={slide.id}>
                <div className='bg-cover relative'>
                    <Image
                        className={'desktop'}
                        src={`${process.env.NEXT_PUBLIC_API_URL}${slide.Image.url}`}
                        width={1000}
                        height={1000}
                        alt={slide.Name}
                    />
                </div>
                <div className="text-banner">  
                    <div className="title-banner"> 
                        <h2 className="ani-title">
                            <span className="ani-title-inner">{slide.Name}</span>
                        </h2> 
                        <h3 className="ani-title" data-time="0.3">
                            <span className="ani-title-inner">Con Người – Vùng đất – Cộng đồng</span>
                        </h3> 
                    </div>   
                    <div className="hm-intro-text">
                        <p>Nhận thức sâu sắc rằng Con người - Vùng đất - Cộng đồng có sinh khí riêng, chúng ta sẽ hết lòng gìn giữ sự hài hoà giữa ba yếu tố này và cùng nhau lớn mạnh. </p>
                    </div>  
                </div>
            </SwiperSlide>

            ))
        }
            
        </Swiper>
    );
}