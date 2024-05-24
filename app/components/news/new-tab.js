"use client"

import { useState } from 'react';
import { Tab, Transition } from '@headlessui/react'

import classNames from '@/app/lib/joinClass';
import ArticleCard from '../articlecard';
import flattenAttributes from '@/app/lib/utils';

export default function NewTab({data}){ 

    const [selectedIndex, setSelectedIndex] = useState(0);

    const tabData = flattenAttributes(data[1])  

    return(
        <Tab.Group
            vertical
            selectedIndex={selectedIndex}
            onChange={setSelectedIndex}
        >
            <Tab.List>
            {tabData.map((category, index) => (
                <Tab 
                    key={category.id} 
                    data-index-number={category.id}
                    className={({selected}) => classNames(
                        index === 0 ? 'first:ml-0 my-11 mr-9' : 'my-11 mx-9',
                        selected
                        ? 'active:opacity-100 visited:opacity-100 focus:opacity-100 selected font-extrabold' 
                        : 'opacity-70 hover:opacity-100'
                    )}
                >
                {category.name}
                </Tab>
            ))}
            </Tab.List>
            <Tab.Panels>
            {tabData.map((posts, index) => (
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
                                {posts.articles.data.map((post) => (   
                                    <ArticleCard key={post.id} post={post} url={post.thumbnail.url} width={2000} height={1333}/>
                                ))}
                            </div>
                        </Transition>
                    </div>
                </Tab.Panel>
            ))}
            </Tab.Panels>
        </Tab.Group>
    )
}