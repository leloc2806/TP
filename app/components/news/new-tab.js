"use client"

import { useState } from 'react';
import { Tab, Transition } from '@headlessui/react'

import classNames from '@/app/lib/joinClass';
import ArticleCard from '../articlecard';
import { motion } from 'framer-motion';

export default function NewTab({data}){ 

    const [selectedIndex, setSelectedIndex] = useState(0);

    return(
        <div className="section-outernav desktop-tab">
            <div className="outer-nav w-[80vw] max-[1100px]:w-[90vw] mx-auto font-normal text-xl">
                <div className="sub-nav">
                    <Tab.Group
                        vertical
                        selectedIndex={selectedIndex}
                        onChange={setSelectedIndex}
                    >
                        <Tab.List>
                        {data[1].map((category, index) => (
                            <Tab 
                                key={category.id} 
                                data-index-number={category.id}
                                className={({selected}) => classNames(
                                    index === 0 ? 'first:ml-0 my-11 mr-9' : 'my-11 mx-9',
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
                        {data[1].map((posts, index) => (
                            <Tab.Panel 
                                key={index}
                                className='wrap-content pt-0 min-h-[80vh] block w-[var(--wrapcontent)] m-auto py-[5vw] px-0 relative h-auto z-10 animate-fade'
                            >
                                <div className='load-news-list relative w-full h-auto '>
                                    <Transition appear show={selectedIndex == index}
                                        enter="transition-opacity duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition-opacity duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0">
                                        <div className='news-list flex justify-start flex-wrap m-auto'>
                                            {posts.attributes.articles.data.map((post) => (   
                                                <ArticleCard key={post.id} post={post.attributes} url={post.attributes.thumbnail.data.attributes.url} width={2000} height={1333}/>
                                            ))}
                                        </div>
                                    </Transition>
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