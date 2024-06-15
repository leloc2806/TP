"use client"


import { useState } from 'react';

import { Tab, Transition } from '@headlessui/react'

import classNames from '@/app/lib/joinClass';
import Image from 'next/image';
import Link from 'next/link';
import flattenAttributes from '@/app/lib/utils';

export default function CategoryProductComboBox({categories}){

    const [selectedIndex, setSelectedIndex] = useState(0);

    const [selectedItem, setDropdown] = useState(false)

    const handleClick = () => {
        setDropdown((prev) => !prev);
    }

    const categoriesData = flattenAttributes(categories)

    return(
        <>
            <Tab.Group
                vertical
                selectedIndex={selectedIndex}
                onChange={setSelectedIndex}
            >
                <Tab.List className="flex flex-col">
                {categoriesData.map((category, index) => (
                    <Tab 
                        key={category.id} 
                        data-index-number={category.id}
                        className={({selected}) => classNames(
                            'opacity-60 hover:opacity-100 w-full text-left py-7 pr-9 text-[16px]',
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
                    {Object.values(categoriesData).map((category, index) => (
                        <Tab.Panel 
                            key={index}
                            className='wrap-content min-h-[80vh] block w-[var(--wrapcontent)] m-auto py-[5vw] px-0 relative h-auto z-10'>
                                <Transition appear show={selectedIndex == index}
                                    enter="transition-opacity duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition-opacity duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0">
                                    <div className='load-news-list relative w-full h-auto flex flex-wrap'>
                                        {category.product_categories.data.map((catProduct) => ( 
                                            <Link key={catProduct.id} className='item-product-category relative block' href={`/san-pham/${catProduct.slug}`}>
                                                <div className="product-category-pic relative">
                                                    <div className="wrap-product-category-pic relative">
                                                        <div className="pic-img relative">
                                                            {
                                                                catProduct.picture && catProduct.picture.url
                                                                ? (<Image src={`${process.env.NEXT_PUBLIC_API_URL}${catProduct.picture.url}`} alt={catProduct.name} width={2000} height={1125}/>)
                                                                : (<Image src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/image_not_found_0457ab7ad4.jpg`} alt={catProduct.picture.name} width={2000} height={1125}/>)
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="absolute product-category-text text-[var(--color-white)]">
                                                        <div className="title-ani ani-item on-show">
                                                            <h2 className='text-3xl'>{catProduct.name}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>     
                                        ))}
                                    </div>
                                </Transition>           
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </>
    )
}