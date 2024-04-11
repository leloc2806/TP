"use client"
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import ArticleCard from './articlecard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useSwiper } from "swiper/react";

const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
        return <button className='slidebox-arrow slidebox-arrow-next is-inview' onClick={() => swiper.slideNext()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width={80} height={80}focusable="false">
                        <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                        <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                    </svg>
                    <div className="arrow"></div>
                    {children}
                </button>;
};

const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
        return <button className='slidebox-arrow slidebox-arrow-prev is-inview' onClick={() => swiper.slidePrev()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width={80} height={80}focusable="false">
                        <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                        <circle r="38" cx="40" cy="40" stroke="#fff" fill="none"></circle>
                    </svg>
                    <div className="arrow"></div>
                    {children}
                </button>;
};


export default () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            const number = index  < 9 ? '0' + (index + 1) : (index + 1)
            return '<span class="' + className + '">' + number + '</span>';
        },
    };
    return (
        <div className='relative m-auto py-[5vw] px-0 w-[var(--wrapcontent)] h-auto '>
            <div className='relative block w-full h-auto z-10 mb-16 mx-0 mt-0'>
                <h2 className='absolute text-[5vw] overflow-hidden opacity-0'>Xem thêm</h2>
                <div className='w-full h-auto block relative'>
                    <span className='text-[5vw] font-thin'>Xem thêm</span>
                </div>
            </div>
            <Swiper
                // install Swiper modules
                spaceBetween={20}
                freeMode={true}
                loop={true}
                pagination={pagination}
                breakpoints={{
                    960: {
                      slidesPerView: 4,
                      slidesPerGroup: 4,
                    },
                  }}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
            >
                <div className='slidebox-arrows'>
                    <SwiperButtonPrev/>
                    <SwiperButtonNext/>
                </div>
                
                <SwiperSlide>
                    <div className="item-news ani-item on-show">
                        <div className="pic-news relative">
                            <div className="pic-img pt-[60%] relative block w-full h-auto overflow-hidden">
                                <img className='absolute w-full h-full top-0 left-0 object-cover object-center pointer-events-none' src={`https://www.nhojsc.vn/pictures/catalog/news/t112023/Dai-dien-NHO.jpg`}/>
                            </div>
                        </div>
                        <div className="txt-news relative block w-full h-auto text-[var(--bgactive)] pt-[0.5rem] pr-[10px] pb-0 pl-0">
                            <div className="date-thumb">by admin | Mar 25, 2024</div>
                            <h3 className="line-clamp-3 overflow-hidden text-ellipsis uppercase">Test Page 5</h3>
                        </div>
                        <div className="view-more absolute bottom-0 left-0 inline-block my-8 mx-0">
                            <a 
                                className="link-load relative flex items-center font-bold py-[5px] px-0 text-base uppercase my-0 mr-[10px] ml-0 text-[var(--color-black30)]" 
                                href={`/news/`} 
                                aria-label="news"
                                >
                                    xem thêm
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                
                
            </Swiper>

        </div>
    );
};