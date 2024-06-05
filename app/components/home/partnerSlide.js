"use client"

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/autoplay';
import Link from 'next/link';
import Image from 'next/image';

export default function SlidePartner({brands}){

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
                className="h-full"
                ref={swiperRefLocal}
                spaceBetween={50}
                slidesPerView={3}
                speed={2000}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }}
                allowTouchMove={false}
                freeMode={true}
                modules={[Autoplay, FreeMode]}
                >
                    {brands.map((brand) => (
                        <SwiperSlide className='' key={brand.id}>
                            <div className='bg-cover relative '>
                                <Image
                                    className={'desktop'}
                                    src={`${process.env.NEXT_PUBLIC_API_URL}${brand.Image.url}`}
                                    alt={'abc'}
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                                        
                </Swiper>
            </div>
            <div className="ani-view-details">
                <Link
                    className="view-details dark sticky-button detect-on-view is-inview relative flex item-center p-0 border-0 mt-8 mx-0 mb-0 w-[5rem] h-[5rem]"
                    href="/about"
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