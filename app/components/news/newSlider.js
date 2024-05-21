"use client"
import React, { useEffect } from 'react';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import ArticleCard from '../articlecard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return (
        <button className='slidebox-arrow slidebox-arrow-next is-inview' onClick={() => swiper.slideNext()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width={80} height={80} focusable="false">
                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
            </svg>
            <div className="arrow"></div>
            {children}
        </button>
    );
};

const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return (
        <button className='slidebox-arrow slidebox-arrow-prev is-inview' onClick={() => swiper.slidePrev()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width={80} height={80} focusable="false">
                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
            </svg>
            <div className="arrow"></div>
            {children}
        </button>
    );
};

export default function Slider({ data, slug }) {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            const number = index < 9 ? '0' + (index + 1) : (index + 1);
            return '<span class="' + className + '">' + number + '</span>';
        },
    };

    return (
        <div className='relative m-auto py-[5vw] px-0 w-[var(--wrapcontent)] h-auto new-slide-relative'>
            <div className='relative block w-full h-auto z-10 mb-16 mx-0 mt-0'>
                <h2 className='absolute text-[5vw] overflow-hidden opacity-0'>Xem thêm</h2>
                <div className='w-full h-auto block relative'>
                    <span className='text-[5vw] font-thin'>Xem thêm</span>
                </div>
            </div>
            <Swiper
                spaceBetween={30}
                pagination={pagination}
                breakpoints={{
                    1100: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                    980: {
                        slidesPerView: 2, // Number of columns in each row
                        slidesPerGroup: 4, // Move 4 slides at a time
                        grid: {
                            rows: 2, // Number of rows
                            fill: 'row', // Fill rows first
                        },
                    },
                    640: {
                        slidesPerView: 1,
                        slidesPerGroup: 4,
                        grid: {
                            rows: 4,
                            fill: 'row',
                        },
                    },

                    100: {
                        slidesPerView: 1,
                        slidesPerGroup: 4,
                        grid: {
                            rows: 4,
                            fill: 'row',
                        },
                    },
                }}
                modules={[Pagination, Navigation, Grid]}
                className="mySwiper"
            >
                {data.length > 4 
                ? <div className='slidebox-arrows'>
                    <SwiperButtonPrev />
                    <SwiperButtonNext />
                </div>
                : ''}

                {data.map((relativeArt) => (
                    <SwiperSlide key={relativeArt.id}>
                        <ArticleCard slug={slug} post={relativeArt} url={relativeArt.thumbnail.url} width={300} height={200} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};
