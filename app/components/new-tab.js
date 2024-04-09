"use client"

import { Tab } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react'; 
import classNames from '@/app/lib/joinClass'

function NewList({data}){

    const post = data.attributes;
    // const firstName = post.createdBy.data.attributes.firstname;
    // const lastName = post.createdBy.data.attributes.lastname;

    // const author = `${firstName} ${lastName}`
    const date = post.createdAt

    return (
        <div className="item-news ani-item on-show">
            <div className="pic-news relative">
                <div className="pic-img pt-[60%] relative block w-full h-auto overflow-hidden">
                    <Image className='absolute w-full h-full top-0 left-0 object-cover object-center pointer-events-none' src={`${process.env.NEXT_PUBLIC_API_URL}${post.thumbnail.data.attributes.url}`} alt={post.title} width={2000} height={1333}/>
                </div>
            </div>
            <div className="txt-news relative block w-full h-auto text-[var(--bgactive)] pt-[0.5rem] pr-[10px] pb-0 pl-0">
                <div className="date-thumb">by admin | {date} </div>
                <h3 className="line-clamp-3 overflow-hidden text-ellipsis uppercase">{post.title}</h3>
            </div>
            <div className="view-more absolute bottom-0 left-0 inline-block my-8 mx-0">
                <Link 
                    className="link-load relative flex items-center font-bold py-[5px] px-0 text-base uppercase my-0 mr-[10px] ml-0 text-[var(--color-black30)]" 
                    href={`/news/${post.slug}`} 
                    aria-label="news"
                    >
                        xem thêm
                    </Link>
            </div>
        </div>
    )
}

export default function NewTab({data}){ 

    return(
        <div className="section-outernav">
            <div className="outer-nav w-[80vw] mx-auto font-normal text-xl">
                <div className="sub-nav">
                    <Tab.Group>
                        <Tab.List>
                        {data[1].map((category) => (
                            <Tab 
                                key={category.id} 
                                data-index-number={category.id}
                                className={({selected}) => classNames(
                                    category.id === 0 ? 'first:ml-0 my-11 mr-9' : 'my-11 mx-9',
                                    selected
                                    ? 'active:opacity-100 visited:opacity-100 focus:opacity-100 selected' 
                                    : 'opacity-60 hover:opacity-100'
                                )}
                            >
                            {category.attributes.name}
                            </Tab>
                        ))}
                        </Tab.List>
                        <Tab.Panels>
                        {data[1].map((posts) => (
                            <Tab.Panel 
                                key={posts.id}
                                className='wrap-content pt-0 min-h-[80vh] block w-[var(--wrapcontent)] m-auto py-[5vw] px-0 relative h-auto z-10'
                            >
                                <div className='load-news-list relative w-full h-auto '>
                                    <div className='news-list flex justify-start flex-wrap m-auto'>
                                    {posts.attributes.articles.data.map((post) => (
                                        <NewList key={post.id} data={post}/>
                                    ))}
                                    </div>
                                </div>
                            </Tab.Panel>
                        ))}
                            
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    )
}