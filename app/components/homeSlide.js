"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default function SlideHome(){
     return (
        <div className='home-banner relative'>
            <Swiper
            spaceBetween={0}
            slidesPerView={1}
            className='h-[100vh]'
            >
                <SwiperSlide>
                    <div className='bg-cover relative'>
                        <img
                            className={'desktop'}
                            src={`https://www.nhojsc.vn/pictures/catalog/banner/01.jpg`}
                        />
                    </div>
                    <div className="text-banner">  
                        <div className="title-banner"> 
                            <h2 className="ani-title">
                                <span className="ani-title-inner">Hòa Nhịp</span>
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
                <SwiperSlide>
                    <div className='bg-cover'>
                        <img
                            className={'desktop'}
                            src={`https://www.nhojsc.vn/pictures/catalog/banner/01.jpg`}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-cover'>
                        <img
                            className={'desktop'}
                            src={`https://www.nhojsc.vn/pictures/catalog/banner/01.jpg`}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-cover'>
                        <img
                            className={'desktop'}
                            src={`https://www.nhojsc.vn/pictures/catalog/banner/01.jpg`}
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}