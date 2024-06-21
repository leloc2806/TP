"use client"

import { useState } from 'react';
import { Tab, Transition } from '@headlessui/react'

import classNames from '@/app/lib/joinClass';
import ArticleCard from '../articlecard';
import flattenAttributes from '@/app/lib/utils';

export default function NewComboBox({data}){ 

    const [selectedIndex, setSelectedIndex] = useState(0);
 
    const [selectedItem, setDropdown] = useState(false)

    const handleClick = () => {
        setDropdown((prev) => !prev);
    }

    const tabData = flattenAttributes(data[1])  

    return(
        <Tab.Group
            vertical
            selectedIndex={selectedIndex}
            onChange={setSelectedIndex}
        >
            <Tab.List className="flex flex-col">
            {tabData.map((category, index) => (
                <Tab 
                    key={category.id} 
                    data-index-number={category.id}
                    className={({selected}) => classNames(
                        'opacity-60 hover:opacity-100 w-full text-left py-7 pr-9 text-[16px] combo-button',
                        selected
                        ? 'active:opacity-100 visited:opacity-100 focus:opacity-100 target:opacity-100 focus-visible:content-none selected font-bold' 
                        : `${selectedItem ? ' -order-first show-tab opacity-100' : ' hidden hide-tab opacity-0'}`
                    )}
                    onClick={() => handleClick()}
                >
                {category.name}
                </Tab>
            ))}
            </Tab.List>
            <Tab.Panels>
            {tabData.map((category, index) => (
                <Tab.Panel 
                    key={index}
                    className='wrap-content pt-0 min-h-[80vh] block w-[var(--wrapcontent)] m-auto py-[5vw] px-0 relative h-auto z-10 animate-fade'
                >
                    <div className='load-news-list relative w-full h-auto pt-[20px]'>
                        <Transition appear show={selectedIndex == index}
                            enter="transition-opacity duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <div className='news-list flex justify-start flex-wrap m-auto'>
                                {category.articles.data.map((post) => (   
                                    <ArticleCard key={post.id} post={post} url={post.thumbnail.url} categorySlug={category.slug} width={2000} height={1333}/>
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