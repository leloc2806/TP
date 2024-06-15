"use client"


import { useState } from 'react';

import { Tab, Transition } from '@headlessui/react'

import classNames from '@/app/lib/joinClass';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductComboBox({products}){

    const [selectedIndex, setSelectedIndex] = useState(0);

    return(
        <>
            <Tab.Group
                vertical
                selectedIndex={selectedIndex}
                onChange={setSelectedIndex}
            >
                <Tab.List className="flex flex-col">
                {products.map((product, index) => (
                   <Tab 
                        key={product.id} 
                        data-index-number={product.id}
                        className={({selected}) => classNames(
                            index === 0 ? 'first:ml-0 my-11 mr-9' : 'my-11 mx-9',
                            selected
                            ? 'active:opacity-100 visited:opacity-100 focus:opacity-100 selected font-bold' 
                            : `${selectedItem ? ' -order-first show-tab opacity-100' : ' hidden hide-tab opacity-0'}`
                        )}
                    >
                    {product.attributes.name}
                    </Tab>
                ))}
                </Tab.List>
                <Tab.Panels>
                    {Object.values(products).map((product, index) => (
                        <Tab.Panel 
                            key={index}
                            className='wrap-content pt-0 min-h-[80vh] block w-[var(--wrapcontent)] m-auto py-[5vw] px-0 relative h-auto z-10'>
                                <Transition appear show={selectedIndex == index}
                                    enter="transition-opacity duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition-opacity duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0">
                                    <div className='load-news-list relative w-full h-auto flex flex-wrap pt-[20px]'>
                                        {product.attributes.product_categories.data.map((catProduct) => ( 
                                            <Link key={catProduct.id} className='item-product-category relative block' href={`/san-pham/${catProduct.attributes.slug}`}>
                                                <div className="product-category-pic relative">
                                                    <div className="wrap-product-category-pic relative">
                                                        <div className="pic-img relative">
                                                            <Image src={`${process.env.NEXT_PUBLIC_API_URL}${catProduct.attributes.picture.data.attributes.url}`} alt={catProduct.attributes.name} width={2000} height={1125}/>
                                                        </div>
                                                    </div>
                                                    <div className="absolute product-category-text text-[var(--color-white)]">
                                                        <div className="title-ani ani-item on-show">
                                                            <h2 className='text-3xl'>{catProduct.attributes.name}</h2>
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