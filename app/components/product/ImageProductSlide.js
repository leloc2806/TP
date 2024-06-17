"use client";
import React, { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import Image from 'next/image';

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
    const [open, setOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Check if data[0].Image is null
    const slides = data[0]?.Image?.url ? Object.values(data).map(image => ({
        src: `${process.env.NEXT_PUBLIC_API_URL}${image.Image.url}`,
        alt: image.Name || 'Image',
        width: image.Image.width || 1024,
        height: image.Image.height || 576,
    })) : [{
        src: `${process.env.NEXT_PUBLIC_API_URL}${firstImage.url}`,
        alt: firstImage.name,
        width: firstImage.width,
        height: firstImage.height,
    }];

    // Handle image click to open Lightbox
    const handleImageClick = (index) => {
        setCurrentSlide(index);
        setOpen(true);
    };

    return (
        <>
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={"product-gallery--slide"}
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            >
                {data && data.length > 2 && (
                    <div className={"swiper-nav swiper-nav-main"}>
                        <SwiperButtonPrev />
                        <SwiperButtonNext />
                    </div>
                )}
                {
                    slides.map((slide, index) => (
                        <SwiperSlide className={"product-gallery--photo"} key={index}>
                            <div className={"product-gallery--item boxlazy-img"}>
                                <div className={"boxlazy-img--insert lazy-img--prod"}>
                                    <button type="button" className={"boxlazy-img--aspect"} onClick={() => handleImageClick(index)}>
                                        <Image 
                                            src={slide.src} 
                                            alt={`Slide ${slide.alt}`} 
                                            width={slide.width} // Use the provided width
                                            height={slide.height} // Use the provided height
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            {/* Thumbnail Swiper */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-gallery--thumb"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className={"product-thumb"}>
                        <div className={"product-thumb--link boxlazy-img"}>
                            <div className={"boxlazy-img--insert lazy-img--prod"}>
                                <span className={"boxlazy-img--aspect"}>
                                    <Image 
                                        className={"gallery-demo swiper-lazy"}
                                        src={slide.src} 
                                        alt={`Thumb ${slide.alt}`} 
                                        width={slide.width}
                                        height={slide.height}
                                    />
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Lightbox Component */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                plugins={[Zoom]}
                index={currentSlide}
                zoom={{
                    scrollToZoom: true,
                    maxZoomPixelRatio: 5
                }}
                onClose={() => setOpen(false)}
            />
        </>
    );
}
