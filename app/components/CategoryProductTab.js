"use client"


import { useState } from 'react';

import { Tab, Transition } from '@headlessui/react'

import classNames from '@/app/lib/joinClass';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react'; 


export default function CategoryProductTab({categories}){

    const [selectedIndex, setSelectedIndex] = useState(0);

    return(
        <>
            <Tab.Group>
                <Tab.List>
                {categories.map((tab) => (
                    <Tab as={Fragment} key={tab.id} className={`${tab.id === 0 ? 'first:ml-0 my-11 mr-9' : 'my-11 mx-9'}`}>
                    {({ selected }) => (
                        <button
                        className={
                            selected ? 'active:opacity-100 visited:opacity-100 focus:opacity-100 selected' : 'opacity-60 hover:opacity-100'
                        }
                        >
                        {tab.attributes.name}
                        </button>
                    )}
                    </Tab>
                ))}
                </Tab.List>
                <Tab.Panels>
                    {categories.map((category, index) => (
                        <Tab.Panel 
                            key={index}
                            className='wrap-content pt-0 min-h-[80vh] block w-[var(--wrapcontent)] m-auto py-[5vw] px-0 relative h-auto z-10'>
                                <div className='load-news-list relative w-full h-auto flex flex-wrap'>
                                    <Transition appear show={selectedIndex == index}
                                        enter="transition-opacity duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition-opacity duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0">
                                        {category.attributes.product_categories.data.map((catProduct) => (
                                            <Link key={catProduct.id} className='item-product-category relative' href='/product'>
                                                <div className="product-category-pic">
                                                    <div className="wrap-product-category-pic">
                                                        <div className="pic-img">
                                                            <img src="https://www.nhojsc.vn/pictures/catalog/project/gem-park/camtt01AI.jpg" alt="Gem Park" width="2000px" height="1125px"/>
                                                        </div>
                                                    </div>
                                                    <div className="absolute product-category-text text-[var(--color-white)]">
                                                        <div className="title-ani ani-item on-show">
                                                            <h2 className='text-3xl'>Gem Park</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>     
                                        ))}
                                    </Transition>           
                                </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </>
    )
}