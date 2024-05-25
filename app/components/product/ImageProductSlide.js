"use client";
import React, { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
        <button className='slidebox-arrow slidebox-arrow-next is-inview swiper-button swiper-next swiper-product-next' onClick={() => swiper.slideNext()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width={80} height={80} focusable="false">
                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
            </svg>
            <div className="arrow"></div>
        </button>
    );
};

const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
        <button className='slidebox-arrow slidebox-arrow-prev is-inview swiper-button swiper-prev swiper-product-prev swiper-button-disabled' onClick={() => swiper.slidePrev()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width={80} height={80} focusable="false">
                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
            </svg>
            <div className="arrow"></div>
        </button>
    );
};

export default function ProductImageSlider({ data, firstImage }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={"product-gallery--slide"}
            >
                {data && data > 2 
                    ? <div className={"swiper-nav swiper-nav-main"}>
                        <SwiperButtonPrev />
                        <SwiperButtonNext />
                    </div> 
                    : ''
                }
                
                
                {
                    data

                    ?(Object.values(data).map((image, index) => (
                    
                        <SwiperSlide className={"product-gallery--photo"} key={index}>
                            <div className={"product-gallery--item boxlazy-img"}>
                                <div className={"boxlazy-img--insert lazy-img--prod"}>
                                    <Link className={"boxlazy-img--aspect"} href={"/"}>
                                        <Image 
                                            src={`${process.env.NEXT_PUBLIC_API_URL}${image.Image.url}`} 
                                            alt={`Slide ${image.Name}`} 
                                            width={200}
                                            height={200}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    )))

                    :(<SwiperSlide className={"product-gallery--photo"}>
                        <div className={"product-gallery--item boxlazy-img"}>
                            <div className={"boxlazy-img--insert lazy-img--prod"}>
                                <Link className={"boxlazy-img--aspect"} href={"/"}>
                                    <Image 
                                        src={`${process.env.NEXT_PUBLIC_API_URL}${firstImage.url}`} 
                                        alt={`Slide ${firstImage.name}`} 
                                        width={200}
                                        height={200}
                                    />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

                
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-gallery--thumb"
            >

            {data ? (
                Object.values(data).map((image, index) => (
                    <SwiperSlide 
                    key={index}
                    className={"product-thumb"}
                    >
                    <div className={"product-thumb--link boxlazy-img"}>
                        <div className={"boxlazy-img--insert lazy-img--prod"}>
                        <span className={"boxlazy-img--aspect"}>
                            <Image 
                            className={"gallery-demo swiper-lazy"}
                            src={`${process.env.NEXT_PUBLIC_API_URL}${image.Image.url}`} 
                            alt={`Thumb ${image.Name}`} 
                            width={200}
                            height={200}
                            />
                        </span>
                        </div>
                    </div>
                    </SwiperSlide>
                ))
                ) : (
                <SwiperSlide 
                    key={"firstImage"}
                    className={"product-thumb"}
                >
                    <div className={"product-thumb--link boxlazy-img"}>
                    <div className={"boxlazy-img--insert lazy-img--prod"}>
                        <span className={"boxlazy-img--aspect"}>
                        <Image 
                            className={"gallery-demo swiper-lazy"}
                            src={`${process.env.NEXT_PUBLIC_API_URL}${firstImage.url}`} 
                            alt={`Thumb ${firstImage.name}`} 
                            width={200}
                            height={200}
                        />
                        </span>
                    </div>
                    </div>
                </SwiperSlide>
                )}

            </Swiper>
        </>
    );
}
