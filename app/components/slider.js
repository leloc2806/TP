"use client"
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import ArticleCard from './articlecard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
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
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                navigation={true}
                pagination={pagination}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper "
            >
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