"use client"

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/autoplay';
import Image from 'next/image';
import Link from 'next/link';

export default function SlidePartner(){

    const swiperRefLocal = useRef()

    const handleMouseEnter = () => {
        swiperRefLocal?.current?.swiper?.autoplay?.stop()
    };

    const handleMouseLeave = () => {
        swiperRefLocal?.current?.swiper?.autoplay?.start()
    };

     return (

        <div className="wrap-content">
            <div className="left-content">
                <div className="title-big text-ani-item color-blue">
                    <div className="text-inner-ani words chars splitting">
                        <h2 className="text-title-about block">đối tác chiến lược</h2>
                    </div>
                </div>
            </div>
            <div className='right-content' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Swiper
                ref={swiperRefLocal}
                spaceBetween={10}
                slidesPerView={3}
                speed={2000}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: false,
                }}
                allowTouchMove={false}
                freeMode={true}
                modules={[Autoplay, FreeMode]}
                >
                    <SwiperSlide className=''>
                        <div className='bg-cover relative '>
                            <img
                                className={'desktop'}
                                src={`https://www.nhojsc.vn/pictures/catalog/banner/01.jpg`}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='bg-cover relative'>
                            <img
                                className={'desktop'}
                                src={`https://www.nhojsc.vn/pictures/catalog/banner/01.jpg`}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='bg-cover relative'>
                            <img
                                className={'desktop'}
                                src={`https://www.nhojsc.vn/pictures/catalog/banner/01.jpg`}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='bg-cover relative'>
                            <img
                                className={'desktop'}
                                src={`https://www.nhojsc.vn/pictures/catalog/banner/01.jpg`}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='bg-cover relative'>
                            <img
                                className={'desktop'}
                                src={`https://www.nhojsc.vn/pictures/catalog/banner/01.jpg`}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='bg-cover relative'>
                            <img
                                className={'desktop'}
                                src={`https://www.nhojsc.vn/pictures/catalog/banner/01.jpg`}
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
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

    );
}